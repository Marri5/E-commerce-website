const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <a href="index.html">
                <img src="/Public/img/logo.png" class="brand-logo" alt="">
            </a>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <a href="../../search.html">
                        <button class="search-btn">search</button>
                    </a>
                </div>
                <a href="#"><img src="/Public/img/user.png" alt=""></a>
                <a href="#"><img src="/Public/img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="../../index.html" class="link">home</a></li>
            <li class="link-item"><a href="../../404.html" class="link">women</a></li>
            <li class="link-item"><a href="../../404.html" class="link">men</a></li>
            <li class="link-item"><a href="../../404.html" class="link">accessories</a></li>
        </ul>
    `;
}

createNav();
