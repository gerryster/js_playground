define
  spyOnAll: (o)->
    for k of o then spyOn(o, k)
    o