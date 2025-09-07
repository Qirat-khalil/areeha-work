    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();

      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('overlay');
      const hamburgerBtn = document.getElementById('hamburgerBtn');
      const closeSidebarBtn = document.getElementById('closeSidebarBtn');

      function openSidebar() {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
      }
      function closeSidebar() {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
      }

      hamburgerBtn.addEventListener('click', e => {
        e.stopPropagation();
        openSidebar();
      });
      closeSidebarBtn.addEventListener('click', e => {
        e.stopPropagation();
        closeSidebar();
      });
      overlay.addEventListener('click', closeSidebar);

      // Clone Wedding Dropdown
      const dropdownBtn = document.getElementById('dropdownBtn');
      const dropdownMenu = document.getElementById('dropdownMenu');
      dropdownBtn.addEventListener('click', e => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('hidden');
      });

      // Navbar dropdown
      const navDropdownBtn = document.querySelector('.relative.inline-block > button');
      const navDropdownMenu = navDropdownBtn.nextElementSibling;
      navDropdownBtn.addEventListener('click', e => {
        e.stopPropagation();
        navDropdownMenu.classList.toggle('hidden');
      });

      // Sidebar dropdowns
      document.querySelectorAll('.dropdown-btn').forEach(btn => {
        btn.addEventListener('click', e => {
          e.stopPropagation();
          btn.nextElementSibling.classList.toggle('hidden');
        });
      });

      // Close dropdowns when clicking outside
      window.addEventListener('click', () => {
        document.querySelectorAll('.dropdown-content').forEach(menu => menu.classList.add('hidden'));
        dropdownMenu.classList.add('hidden');
        navDropdownMenu.classList.add('hidden');

        
      });
    });