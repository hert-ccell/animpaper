(() => {
  const data = window.ANIMPAPER_WALLPAPERS || [];
  const grid = document.getElementById("wallpaperGrid");
  const search = document.getElementById("searchInput");
  const device = document.getElementById("deviceFilter");
  const sort = document.getElementById("sortFilter");
  const count = document.getElementById("resultCount");
  const empty = document.getElementById("emptyState");
  const modal = document.getElementById("wallpaperModal");
  let category = "all";

  const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const imageFor = (item, kind) => kind === "mobile" ? item.mobile : item.desktop;

  function render() {
    const q = search.value.trim().toLowerCase();
    let list = data.filter(item => {
      const matchesCategory = category === "all" || item.category === category;
      const matchesDevice = device.value === "all" || Boolean(item[device.value]);
      const haystack = [item.title,item.anime,item.category,...item.tags].join(" ").toLowerCase();
      return matchesCategory && matchesDevice && haystack.includes(q);
    });
    if (sort.value === "newest") list.sort((a,b) => b.date.localeCompare(a.date));
    if (sort.value === "az") list.sort((a,b) => a.title.localeCompare(b.title));
    if (sort.value === "featured") list.sort((a,b) => Number(b.featured)-Number(a.featured));
    count.textContent = `${list.length} wallpaper${list.length === 1 ? "" : "s"}`;
    empty.hidden = list.length !== 0;
    grid.innerHTML = list.map(item => {
      const kind = device.value === "mobile" ? "mobile" : "desktop";
      const src = imageFor(item, kind);
      return `<article class="wallpaper-card" data-id="${escapeHTML(item.id)}" tabindex="0" role="button" aria-label="Preview ${escapeHTML(item.title)}">
        <div class="wallpaper-thumb"><img src="${escapeHTML(src)}" alt="${escapeHTML(item.title)} wallpaper" loading="lazy"><div class="card-overlay"><span class="preview-pill">Preview ↗</span><span class="device-pill">${kind.toUpperCase()}</span></div></div>
        <div class="card-meta"><div><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.anime)}</p></div><span class="card-tag">${escapeHTML(item.category)}</span></div>
      </article>`;
    }).join("");
    grid.querySelectorAll(".wallpaper-card").forEach(card => {
      const open = () => showModal(data.find(x => x.id === card.dataset.id));
      card.addEventListener("click", open);
      card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
    });
  }

  function showModal(item) {
    if (!item) return;
    document.getElementById("modalImage").src = imageFor(item, device.value === "mobile" ? "mobile" : "desktop");
    document.getElementById("modalImage").alt = item.title;
    document.getElementById("modalCategory").textContent = `${item.category} / ${item.anime}`;
    document.getElementById("modalTitle").textContent = item.title;
    document.getElementById("modalDescription").textContent = item.description;
    document.getElementById("modalCredit").textContent = `Credit: ${item.credit}`;
    document.getElementById("modalDownloads").innerHTML = `
      <a class="download-link" href="${item.mobile}" download="${item.id}-mobile.svg"><span>↓ Mobile wallpaper</span><span>Phone format</span></a>
      <a class="download-link" href="${item.desktop}" download="${item.id}-desktop.svg"><span>↓ Desktop wallpaper</span><span>Wide format</span></a>`;
    modal.classList.add("open"); modal.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden";
  }
  function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow="";}
  document.querySelectorAll("[data-close]").forEach(el=>el.addEventListener("click",closeModal));
  document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();search.focus();}});
  search.addEventListener("input",render); device.addEventListener("change",render); sort.addEventListener("change",render);
  document.getElementById("categoryChips").addEventListener("click",e=>{
    const btn=e.target.closest("[data-category]"); if(!btn)return;
    category=btn.dataset.category;
    document.querySelectorAll(".chip").forEach(x=>x.classList.toggle("active",x===btn));
    render();
  });
  document.querySelectorAll("[data-jump]").forEach(btn=>btn.addEventListener("click",()=>{
    category=btn.dataset.jump;
    document.querySelectorAll(".chip").forEach(x=>x.classList.toggle("active",x.dataset.category===category));
    document.getElementById("discover").scrollIntoView({behavior:"smooth"});render();
  }));
  document.getElementById("clearFilters").addEventListener("click",()=>{search.value="";device.value="all";sort.value="featured";category="all";document.querySelectorAll(".chip").forEach(x=>x.classList.toggle("active",x.dataset.category==="all"));render();});
  document.getElementById("year").textContent=new Date().getFullYear();
  document.getElementById("menuToggle").addEventListener("click",()=>document.querySelector(".main-nav").classList.toggle("show"));
  const notice=document.getElementById("cookieNotice");
  try{if(!localStorage.getItem("animpaper-notice"))notice.hidden=false;}catch(e){notice.hidden=false;}
  document.getElementById("cookieAccept").addEventListener("click",()=>{try{localStorage.setItem("animpaper-notice","1");}catch(e){}notice.hidden=true;});
  render();
})();