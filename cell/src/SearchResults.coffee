define ['Bus'], (Bus)->
  _ = cell::$R # Cell render helper
  
  afterRender: ->
    Bus.bindAndCall 'change:searchTerm': ({cur:searchTerm})=>

      if searchTerm
        isearch = new google.search.ImageSearch()

        isearch.setSearchCompleteCallback this, =>
          #Clear previous results
          @$el.html ''
          # Render each result to an <img> tag
          for r in isearch.results
            @$el.append _ "<img src='#{r.tbUrl}'>"
            
        isearch.execute searchTerm