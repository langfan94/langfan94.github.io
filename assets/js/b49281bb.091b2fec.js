"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4635],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),u=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return i.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(t),h=a,d=f["".concat(o,".").concat(h)]||f[h]||c[h]||r;return t?i.createElement(d,s(s({ref:n},p),{},{components:t})):i.createElement(d,s({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=f;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<r;u++)s[u]=t[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1640:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var i=t(7462),a=t(3366),r=(t(7294),t(3905)),s=["components"],l={title:"input_iview",date:new Date("2018-09-29T18:58:12.000Z"),tags:["iview","javascript"]},o="Input Component of iview",u={permalink:"/input-iview",editUrl:"https://github.com/langfan94/tree/main/packages/create-docusaurus/templates/shared/blog/input-iview.md",source:"@site/blog/input-iview.md",title:"input_iview",description:"\u7ec4\u4ef6\u5982\u4f55\u5b9e\u73b0\u6570\u636e\u53cc\u5411\u7ed1\u5b9a?",date:"2018-09-29T18:58:12.000Z",formattedDate:"September 29, 2018",tags:[{label:"iview",permalink:"/tags/iview"},{label:"javascript",permalink:"/tags/javascript"}],readingTime:3.945,truncated:!1,authors:[],frontMatter:{title:"input_iview",date:"2018-09-29T18:58:12.000Z",tags:["iview","javascript"]},prevItem:{title:"ios-input-bug",permalink:"/ios-input-bug"},nextItem:{title:"gulp",permalink:"/mygulp"}},p={authorsImageUrls:[]},c=[{value:"\u7ec4\u4ef6\u5982\u4f55\u5b9e\u73b0\u6570\u636e\u53cc\u5411\u7ed1\u5b9a?",id:"\u7ec4\u4ef6\u5982\u4f55\u5b9e\u73b0\u6570\u636e\u53cc\u5411\u7ed1\u5b9a",level:2}],f={toc:c};function h(e){var n=e.components,t=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u7ec4\u4ef6\u5982\u4f55\u5b9e\u73b0\u6570\u636e\u53cc\u5411\u7ed1\u5b9a"},"\u7ec4\u4ef6\u5982\u4f55\u5b9e\u73b0\u6570\u636e\u53cc\u5411\u7ed1\u5b9a?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'  <template>\n    <div :class="wrapClasses">\n        <template v-if="type !== \'textarea\'">\n            <div :class="[prefixCls + \'-group-prepend\']" v-if="prepend" v-show="slotReady"><slot name="prepend"></slot></div>\n            <i class="ivu-icon" :class="[\'ivu-icon-ios-close-circle\', prefixCls + \'-icon\', prefixCls + \'-icon-clear\' , prefixCls + \'-icon-normal\']" v-if="clearable && currentValue" @click="handleClear"></i>\n            <i class="ivu-icon" :class="[\'ivu-icon-\' + icon, prefixCls + \'-icon\', prefixCls + \'-icon-normal\']" v-else-if="icon" @click="handleIconClick"></i>\n            <i class="ivu-icon ivu-icon-ios-search" :class="[prefixCls + \'-icon\', prefixCls + \'-icon-normal\', prefixCls + \'-search-icon\']" v-else-if="search && enterButton === false" @click="handleSearch"></i>\n            <span class="ivu-input-suffix" v-else-if="showSuffix"><slot name="suffix"><i class="ivu-icon" :class="[\'ivu-icon-\' + suffix]" v-if="suffix"></i></slot></span>\n            <transition name="fade">\n                <i class="ivu-icon ivu-icon-ios-loading ivu-load-loop" :class="[prefixCls + \'-icon\', prefixCls + \'-icon-validate\']" v-if="!icon"></i>\n            </transition>\n            <input\n                :id="elementId"\n                :autocomplete="autocomplete"\n                :spellcheck="spellcheck"\n                ref="input"\n                :type="type"\n                :class="inputClasses"\n                :placeholder="placeholder"\n                :disabled="disabled"\n                :maxlength="maxlength"\n                :readonly="readonly"\n                :name="name"\n                :value="currentValue"\n                :number="number"\n                :autofocus="autofocus"\n                @keyup.enter="handleEnter"\n                @keyup="handleKeyup"\n                @keypress="handleKeypress"\n                @keydown="handleKeydown"\n                @focus="handleFocus"\n                @blur="handleBlur"\n                @input="handleInput"\n                @change="handleChange">\n            <div :class="[prefixCls + \'-group-append\']" v-if="append" v-show="slotReady"><slot name="append"></slot></div>\n            <div :class="[prefixCls + \'-group-append\', prefixCls + \'-search\']" v-else-if="search && enterButton" @click="handleSearch">\n                <i class="ivu-icon ivu-icon-ios-search" v-if="enterButton === true"></i>\n                <template v-else>{{ enterButton }}</template>\n            </div>\n            <span class="ivu-input-prefix" v-else-if="showPrefix"><slot name="prefix"><i class="ivu-icon" :class="[\'ivu-icon-\' + prefix]" v-if="prefix"></i></slot></span>\n        </template>\n        <textarea\n            v-else\n            :id="elementId"\n            :wrap="wrap"\n            :autocomplete="autocomplete"\n            :spellcheck="spellcheck"\n            ref="textarea"\n            :class="textareaClasses"\n            :style="textareaStyles"\n            :placeholder="placeholder"\n            :disabled="disabled"\n            :rows="rows"\n            :maxlength="maxlength"\n            :readonly="readonly"\n            :name="name"\n            :value="currentValue"\n            :autofocus="autofocus"\n            @keyup.enter="handleEnter"\n            @keyup="handleKeyup"\n            @keypress="handleKeypress"\n            @keydown="handleKeydown"\n            @focus="handleFocus"\n            @blur="handleBlur"\n            @input="handleInput">\n        </textarea>\n    </div>\n</template>\n<script>\n    import { oneOf, findComponentUpward } from \'../../utils/assist\';\n    import calcTextareaHeight from \'../../utils/calcTextareaHeight\';\n    import Emitter from \'../../mixins/emitter\';\n    const prefixCls = \'ivu-input\';\n    export default {\n        name: \'Input\',\n        mixins: [ Emitter ],\n        props: {\n            type: {\n                validator (value) {\n                    return oneOf(value, [\'text\', \'textarea\', \'password\', \'url\', \'email\', \'date\']);\n                },\n                default: \'text\'\n            },\n            value: {\n                type: [String, Number],\n                default: \'\'\n            },\n            size: {\n                validator (value) {\n                    return oneOf(value, [\'small\', \'large\', \'default\']);\n                },\n                default () {\n                    return !this.$IVIEW || this.$IVIEW.size === \'\' ? \'default\' : this.$IVIEW.size;\n                }\n            },\n            placeholder: {\n                type: String,\n                default: \'\'\n            },\n            maxlength: {\n                type: Number\n            },\n            disabled: {\n                type: Boolean,\n                default: false\n            },\n            icon: String,\n            autosize: {\n                type: [Boolean, Object],\n                default: false\n            },\n            rows: {\n                type: Number,\n                default: 2\n            },\n            readonly: {\n                type: Boolean,\n                default: false\n            },\n            name: {\n                type: String\n            },\n            number: {\n                type: Boolean,\n                default: false\n            },\n            autofocus: {\n                type: Boolean,\n                default: false\n            },\n            spellcheck: {\n                type: Boolean,\n                default: false\n            },\n            autocomplete: {\n                validator (value) {\n                    return oneOf(value, [\'on\', \'off\']);\n                },\n                default: \'off\'\n            },\n            clearable: {\n                type: Boolean,\n                default: false\n            },\n            elementId: {\n                type: String\n            },\n            wrap: {\n                validator (value) {\n                    return oneOf(value, [\'hard\', \'soft\']);\n                },\n                default: \'soft\'\n            },\n            prefix: {\n                type: String,\n                default: \'\'\n            },\n            suffix: {\n                type: String,\n                default: \'\'\n            },\n            search: {\n                type: Boolean,\n                default: false\n            },\n            enterButton: {\n                type: [Boolean, String],\n                default: false\n            }\n        },\n        data () {\n            return {\n                currentValue: this.value,\n                prefixCls: prefixCls,\n                prepend: true,\n                append: true,\n                slotReady: false,\n                textareaStyles: {},\n                showPrefix: false,\n                showSuffix: false\n            };\n        },\n        computed: {\n            wrapClasses () {\n                return [\n                    `${prefixCls}-wrapper`,\n                    {\n                        [`${prefixCls}-wrapper-${this.size}`]: !!this.size,\n                        [`${prefixCls}-type`]: this.type,\n                        [`${prefixCls}-group`]: this.prepend || this.append || (this.search && this.enterButton),\n                        [`${prefixCls}-group-${this.size}`]: (this.prepend || this.append || (this.search && this.enterButton)) && !!this.size,\n                        [`${prefixCls}-group-with-prepend`]: this.prepend,\n                        [`${prefixCls}-group-with-append`]: this.append || (this.search && this.enterButton),\n                        [`${prefixCls}-hide-icon`]: this.append,  // #554\n                        [`${prefixCls}-with-search`]: (this.search && this.enterButton)\n                    }\n                ];\n            },\n            inputClasses () {\n                return [\n                    `${prefixCls}`,\n                    {\n                        [`${prefixCls}-${this.size}`]: !!this.size,\n                        [`${prefixCls}-disabled`]: this.disabled,\n                        [`${prefixCls}-with-prefix`]: this.showPrefix,\n                        [`${prefixCls}-with-suffix`]: this.showSuffix || (this.search && this.enterButton === false)\n                    }\n                ];\n            },\n            textareaClasses () {\n                return [\n                    `${prefixCls}`,\n                    {\n                        [`${prefixCls}-disabled`]: this.disabled\n                    }\n                ];\n            }\n        },\n        methods: {\n            handleEnter (event) {\n                this.$emit(\'on-enter\', event);\n                if (this.search) this.$emit(\'on-search\', this.currentValue);\n            },\n            handleKeydown (event) {\n                this.$emit(\'on-keydown\', event);\n            },\n            handleKeypress(event) {\n                this.$emit(\'on-keypress\', event);\n            },\n            handleKeyup (event) {\n                this.$emit(\'on-keyup\', event);\n            },\n            handleIconClick (event) {\n                this.$emit(\'on-click\', event);\n            },\n            handleFocus (event) {\n                this.$emit(\'on-focus\', event);\n            },\n            handleBlur (event) {\n                this.$emit(\'on-blur\', event);\n                if (!findComponentUpward(this, [\'DatePicker\', \'TimePicker\', \'Cascader\', \'Search\'])) {\n                    this.dispatch(\'FormItem\', \'on-form-blur\', this.currentValue);\n                }\n            },\n            handleInput (event) {\n                let value = event.target.value;\n                if (this.number && value !== \'\') value = Number.isNaN(Number(value)) ? value : Number(value);\n                this.$emit(\'input\', value);\n                this.setCurrentValue(value);\n                this.$emit(\'on-change\', event);\n            },\n            handleChange (event) {\n                this.$emit(\'on-input-change\', event);\n            },\n            setCurrentValue (value) {\n                if (value === this.currentValue) return;\n                this.$nextTick(() => {\n                    this.resizeTextarea();\n                });\n                this.currentValue = value;\n                if (!findComponentUpward(this, [\'DatePicker\', \'TimePicker\', \'Cascader\', \'Search\'])) {\n                    this.dispatch(\'FormItem\', \'on-form-change\', value);\n                }\n            },\n            resizeTextarea () {\n                const autosize = this.autosize;\n                if (!autosize || this.type !== \'textarea\') {\n                    return false;\n                }\n                const minRows = autosize.minRows;\n                const maxRows = autosize.maxRows;\n                this.textareaStyles = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);\n            },\n            focus () {\n                if (this.type === \'textarea\') {\n                    this.$refs.textarea.focus();\n                } else {\n                    this.$refs.input.focus();\n                }\n            },\n            blur () {\n                if (this.type === \'textarea\') {\n                    this.$refs.textarea.blur();\n                } else {\n                    this.$refs.input.blur();\n                }\n            },\n            handleClear () {\n                const e = { target: { value: \'\' } };\n                this.$emit(\'input\', \'\');\n                this.setCurrentValue(\'\');\n                this.$emit(\'on-change\', e);\n            },\n            handleSearch () {\n                if (this.disabled) return false;\n                this.$refs.input.focus();\n                this.$emit(\'on-search\', this.currentValue);\n            }\n        },\n        watch: {\n            value (val) {\n                this.setCurrentValue(val);\n            }\n        },\n        mounted () {\n            if (this.type !== \'textarea\') {\n                this.prepend = this.$slots.prepend !== undefined;\n                this.append = this.$slots.append !== undefined;\n                this.showPrefix = this.prefix !== \'\' || this.$slots.prefix !== undefined;\n                this.showSuffix = this.suffix !== \'\' || this.$slots.suffix !== undefined;\n            } else {\n                this.prepend = false;\n                this.append = false;\n            }\n            this.slotReady = true;\n            this.resizeTextarea();\n        }\n    };\n<\/script>\n')))}h.isMDXComponent=!0}}]);