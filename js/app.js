const groups = document.querySelectorAll('[data-group]');

groups.forEach(function(group) {
    const allTargets = group.querySelectorAll('[data-target]');
    const allClicks = group.querySelectorAll('[data-click]');
    const activeClass = 'active';

    allTargets[0].classList.add(activeClass);
    allClicks[0].classList.add(activeClass);

    allClicks.forEach(function(click) {
        click.addEventListener('click', function(e) {
            e.preventDefault();

            const id = this.getAttribute('data-click');
            const target = group.querySelector('[data-target="' + id + '"]');

            allClicks.forEach(function(clickItem) {
                clickItem.classList.remove(activeClass);
            });

            allTargets.forEach(function(targetItem) {
                targetItem.classList.remove(activeClass);
            });

            this.classList.add(activeClass);
            target.classList.add(activeClass);
        });
    });
});