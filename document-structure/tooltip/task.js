const elements = document.querySelectorAll('.has-tooltip');

for (element of elements) {
    element.addEventListener('click', tooltipActivate);
  }

  function tooltipActivate() {
    event.preventDefault();

    const tooltipActive = document.getElementsByClassName('tooltip_active')[0];
    if (tooltipActive) {
        tooltipActive.classList.remove('tooltip_active');
         if (tooltipActive.textContent == this.title) {
          return;
        }
      }

    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip', 'tooltip_active');
    tooltip.textContent = this.getAttribute('title');
    const elementCoords= this.getBoundingClientRect();
    tooltip.style.top = `${elementCoords.bottom}px`;
    tooltip.style.left = `${elementCoords.left}px`;
    document.body.append(tooltip);
  }

