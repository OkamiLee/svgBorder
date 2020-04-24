import SvgBorder from './packages/SvgBorder/SvgBorder.vue'
import SvgBorder2 from './packages/svgborder2/SvgBorder.vue'
const components = {
	SvgBorder,SvgBorder2
};
const install = function(Vue,opts){
	opts = opts||{};
	components.map(component=>{
		Vue.component(component.name,component)
	})
};
if(typeof window !== 'undefined' && window.Vue){
	install(window.Vue);
}
export default {
	install,
	SvgBorder,
	SvgBorder2
}
