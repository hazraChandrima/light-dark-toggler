var lightToggleIcon = document.getElementById("theme-toggle-light-icon");
var darkToggleIcon = document.getElementById("theme-toggle-dark-icon");

     if (localStorage.getItem('color-theme') === 'dark' || !(('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            lightToggleIcon.classList.remove('hidden');
        }
        else {
            darkToggleIcon.classList.remove('hidden');
        }


function themeToggler() {
              
    lightToggleIcon.classList.toggle("hidden");
    darkToggleIcon.classList.toggle("hidden");

    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem('color-theme','light');
    }
    else {
        document.documentElement.classList.add("dark");
        localStorage.setItem('color-theme', 'dark');       
    }
}

