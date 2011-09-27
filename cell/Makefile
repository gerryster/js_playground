#===================================================================
#--------------------------- Variables -----------------------------
#===================================================================
coffee = node_modules/.bin/coffee
serve= node_modules/.bin/serve
stylus = node_modules/.bin/stylus
uglifyjs = node_modules/.bin/uglifyjs
connect = node_modules/connect/package.json
requirejsBuild = ./vendor/requirejs/r.js

#===================================================================
#­--------------------------- TARGETS ------------------------------
#===================================================================
.PHONY : clean

#-------------------------------------------------------------------
# BUILD
#------------------------------------------------------------------- 
src/bootstrap.js: $(uglifyjs) src/cell.js src/cell-pluginBuilder.js
	node $(requirejsBuild) \
		-o \
		paths.requireLib=../vendor/requirejs/require \
		include=requireLib \
		name=cell!App \
		out=src/bootstrap-tmp.js \
		baseUrl=src includeRequire=true
	cat src/bootstrap-tmp.js | $(uglifyjs) -nc > src/bootstrap.js
	cat src/global.css \
			src/bootstrap-tmp.css > src/bootstrap.css
	rm src/bootstrap-tmp.*

#-------------------------------------------------------------------
# TEST
#------------------------------------------------------------------- 
specs:
	find src -name '*Spec.coffee' | xargs coffee -e 'console.log "define([],#{JSON.stringify process.argv[4..].map (e)->/^src\/(.*?)\.coffee/.exec(e)[1]});"' > spec/allSpecs.js

#-------------------------------------------------------------------
# DEV 
#------------------------------------------------------------------- 
dev-server: $(coffee) $(connect) dev-server.coffee
	$(coffee) ./dev-server.coffee `pwd`

dev-stylus: $(stylus)
	find ./src ./mixins -name '*.styl' -type f | xargs $(stylus) --watch --compress

dev-coffee: $(coffee)
	find ./src ./spec -name '*.coffee' -type f | xargs $(coffee) -c -b --watch

#-------------------------------------------------------------------
# Dependencies 
#------------------------------------------------------------------- 
$(stylus):
	npm install stylus

$(coffee):
	npm install coffee-script

$(connect):
	npm install connect

$(uglifyjs):
	npm install uglify-js

clean: 
	@@rm src/bootstrap.*
