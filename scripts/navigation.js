/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function toggleMenu()
{
    document.getElementById("menList").classList.toggle("show");
    document.getElementById("top").classList.toggle("expand");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.menuBtn')) {

        var dropdowns = document.getElementsByClassName("list");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        var menus = document.getElementsByClassName("MENU");
        var i;
        for (i = 0; i < menus.length; i++) {
            var openDropdown = menus[i];
            if (openDropdown.classList.contains('expand')) {
                openDropdown.classList.remove('expand');
            }
        }
    }
}

function clickableProject(object)
{
    var isHovered = object.matches(':hover');
    var isDescriptionVisible = getComputedStyle(object.getElementsByClassName('description')[0].children[0])['transform'].length < 26;
    return  isHovered && isDescriptionVisible;
}