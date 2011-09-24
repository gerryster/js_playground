define [
  'cell!./Banner'
  'cell!./SearchResults'
], (Banner,SearchResults)->
	
  render: (_)-> [
    _ Banner
    _ SearchResults
  ]