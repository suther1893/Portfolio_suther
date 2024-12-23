
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');
    const links = navbar.querySelectorAll('a');

        
             menuIcon.addEventListener('click', () => {
            if (navbar.style.display === 'block') {
                navbar.style.display = 'none';
            } else {
                navbar.style.display = 'block';
            }
        });

       
        // links.forEach(link => {
        //     link.addEventListener('click', () => {
        //         navbar.style.display = 'none';
        //     });
        // });

