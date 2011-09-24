define ['Bus'], (Bus)->

  render: (_)-> [
    _ 'span.title', 'Azorian'
    _ 'input.searchInput', placeholder: 'Search Term', value: Bus.searchTerm or ''
    _ 'button.searchButton', 'Search'
  ]

  on:
    # Handle mouse clicks on search button
    'click .searchButton': ->
      # Broadcast searchTerm
      Bus.set searchTerm: $('.searchInput').val()

    # Handle key up events from search text input
    'keyup .searchInput': ({which,target})->
      # Enter pressed
      if which is 13
        # Broadcast searchTerm
        Bus.set searchTerm: $(target).val()
