define ['Bus'], (Bus)->
  _ = cell::$R # Cell render helper

  afterRender: ->
    Bus.bindAndCall 'change:searchTerm': ({cur:searchTerm})=>

      if searchTerm
        isearch = new google.search.ImageSearch()
        isearch.setResultSetSize(8)

        isearch.setSearchCompleteCallback this, =>
          #Clear previous results
          @$el.html ''
          # Render each result to an <img> tag
          for r in isearch.results
            # rgerry question - what does "@$el" mean?
            @$el.append _ "<a href='#{r.originalContextUrl}' target='_blank'><img src='#{r.tbUrl}'></a>"

        isearch.execute searchTerm
