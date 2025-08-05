let choices;

document.addEventListener('DOMContentLoaded', function () {
  const selectElement = document.getElementById('blockedChannels');

  if (selectElement) {
    choices = new Choices(selectElement, {
      removeItemButton: true,
      searchEnabled: true,
      placeholder: true,
      placeholderValue: 'Selecione os canais',
      searchPlaceholderValue: 'Buscar canal...',
      classNames: {
        containerInner: 'choices__inner',
        listDropdown: 'choices__list--dropdown',
        item: 'choices__item',
        input: 'choices__input'
      }
    });
  }

  document.getElementById('guildForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const prefix = document.getElementById('prefix').value;
    const restricted = document.getElementById('toggleMessage')?.checked;

    const selectedChannels = choices?.getValue(true) || [];

    console.log('Selected:', selectedChannels);

    const response = await fetch('/api/update-guild-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        guildId: document.location.pathname.split('/')[2],
        prefix,
        restricted,
        blockedChannels: selectedChannels
      })
    });

    const result = await response.json();
    alert(result.message || 'Alterações salvas com sucesso!');
  });
});
