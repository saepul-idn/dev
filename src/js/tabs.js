
    function showTab(tabId) {
        // Menyembunyikan semua konten tab
        var tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(function (tabContent) {
            tabContent.style.display = 'none';
        });

        // Menampilkan konten tab yang dipilih
        var selectedTab = document.getElementById(tabId);
        if (selectedTab) {
            selectedTab.style.display = 'block';
        }
    }
