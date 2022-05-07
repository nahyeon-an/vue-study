# Vue Study    

- [Vue Study](#vue-study)
  - [Declarative Rendering](#declarative-rendering)
    - [Attribute Binding : v-bind](#attribute-binding--v-bind)
    - [DOM event listener : v-on](#dom-event-listener--v-on)
    - [Form Binding : v-model](#form-binding--v-model)
    - [Conditional Rendering : v-if, v-else, v-else-if](#conditional-rendering--v-if-v-else-v-else-if)
    - [List Rendering : v-for](#list-rendering--v-for)
    - [Computed Property](#computed-property)
  - [Lifecycle and Template Refs](#lifecycle-and-template-refs)
  - [Watchers](#watchers)
  - [Component](#component)
  - [Props](#props)
  - [Emits](#emits)
  - [Slots](#slots)
- [Vuex](#vuex)


## Declarative Rendering  
Vue SFC
- SFC : Single File Component  
- .vue 파일 안에 html, css, js 를 캡슐화하여 재사용가능한 블록으로 정의하는 특성  

declarative rendering  
- HTML 을 확장한 template syntax 를 사용함  
- js 구문을 기반으로 html 을 어떻게 보여줄 것인지를 정의함  
- 상태가 변하면, vue 가 자동으로 html 을 업데이트  
  - state : 업데이트 트리거  
  - reactive state -> 컴포넌트에 존재  
  - 컴포넌트 : 리턴되는 object  


### Attribute Binding : v-bind    
mustach {{}} : text interpolation 에만 사용됨   
attriubte 를 동적 value 에 바인딩하는 방법  
- v-bind 를 사용  
- directive : v- 가 prefix 로 붙는 스페셜 속성  
  - vue template syntax  
  - directive value 로 컴포넌트 상태에 접근 가능  
  - directive value 도 js 구문이 들어갈 수 있음   

```html
<div v-bind:id="dynamicId"></div>
<div :id="dynamicId"></div>  # shortcut
```  


### DOM event listener : v-on  

```html
<button v-on:click='increment'>{{ count }}</button> 
<button @click='increment'>{{ count }}</button>  # shortcut
```
increment 는 methods 옵션과 js function 으로 정의된 event handler 이름  
- 메서드 내에서 컴포넌트 객체에 접근 시 this 를 사용하여 접근  

[Vue document: Event Handling](https://vuejs.org/guide/essentials/event-handling.html)  


### Form Binding : v-model  
v-bind, v-on 을 이용한 form 요소 속성 변경을 v-model 하나로 처리할 수 있게 함  

```javascript  
<input v-model="text">  
```  
컴포넌트의 text 속성에 value 저장  
자동으로 input value 를 가져옴 -> value 를 가져오기 위한 이벤트 핸들러가 따로 필요 없어짐    

[Vue document: Form Input Binding](https://vuejs.org/guide/essentials/forms.html)  


### Conditional Rendering : v-if, v-else, v-else-if  
```javascript  
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1> 
```
awesome value 가 true 일 때 렌더링  
- branch : v-else, v-else-if

[Vue document: Conditional Rendering](https://vuejs.org/guide/essentials/conditional.html)  


### List Rendering : v-for  
```html  
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```  
각 element 에 unique id 를 부여하기  
- key attribute 를 바인딩  

리스트를 업데이트 하기  
1. mutating method  
2. replace array  


### Computed Property  
컴포넌트에서 computed 옵션을 사용  
reactive data 를 렌더링할 때 사용하면 좋다  
computed property 는 reactive dependency에 따라 캐시됨  
- 결과를 캐시해두고, 자동으로 업데이트  

[Vue document: Computed Property](https://vuejs.org/guide/essentials/computed.html)  



## Lifecycle and Template Refs  
declarative rendering 을 이용하여 dom 객체를 업데이트 할 수 있었음  
- 직접 dom 을 업데이트 하려고 한다면?  

template ref  
- template element 에 대한 reference  
- special attribute 인 ref 를 사용  
- this.$refs 에 ref 값으로 정의한 이름으로 참조 가능  

```html
<p ref="p">hello</p>
```
하지만 컴포넌트의 마운트가 완료된 후에 p 엘리먼트에 접근 가능  

마운트 이후에 실행하려는 코드는 mounted 옵션과 함께 사용  
```javascript
export default {
  mounted() {
    // component is now mounted.
  }
}
```
lifecycle hook  
- 컴포넌트 라이프사이클의 특정 순간에 호출될 콜백을 정의할 수 있게 함   
- create, update 라는 다른 훅도 존재  

[Vue document: Lifecycle Diagram](https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram)  


## Watchers  
반응하는 요소와 함께 side effect 부가적인 일을 해야할 때 사용 (ex. logging)   
watch 옵션 이용  
```javascript
export default {
  data() {
    return {
      count: 0
    }
  },
  watch: {
    count(newCount) {
      // yes, console.log() is a side effect
      console.log(`new count is: ${newCount}`)
    }
  }
}
```  
watch 콜백은 count 값이 변했을 때 호출됨  
- newCount 변수로 변한 값을 가져옴  
- 관찰하려는 컴포넌트의 state 이름에 ()을 붙여 함수형태로 만들어야함   

[Vue document: Watchers](https://vuejs.org/guide/essentials/watchers.html)  


## Component  
다른 컴포넌트를 자식 컴포넌트로써 사용 가능  

(1) import 를 이용해서 가져온다  
(2) components 옵션을 이용해서 컴포넌트를 등록   
    - 여러개일 때, object 안에 나열하여 사용 가능  
    - 여기서는 object property shorthand 사용 (object 의 키만 나열)  
(3) template 안에서 사용 가능  

```javascript
import ChildComp from './ChildComp.vue'

export default {
  components: {
    ChildComp
  }
}
```  

## Props  
child 컴포넌트는 부모 컴포넌트로부터 props 를 이용하여 인풋을 받을 수 있음  

(1) 자식 컴포넌트는 전달받을 props 를 정의해야 함  
```javascript
export default {
  props: {
    msg: String  // template 에서 this.msg 로 접근 가능 
  }
}
```

(2) 부모 컴포넌트는 attribute 를 정의해서 전달 가능 (dynamic value 를 전달하기 위해서 v-bind 를 사용)   
```html
<ChildComp :msg="greeting" />
```  

## Emits  
자식 컴포넌트가 부모 컴포넌트에게 이벤트를 emit 방출할 수 있음  
```javascript
export default {
  // declare emitted events
  emits: ['response'],
  created() {
    // emit with argument
    // this.$emit(event name, 이벤트 리스너에 전달할 부가적인 인자)
    this.$emit('response', 'hello from child')
  }
}
```
부모 컴포넌트는 자식이 방출한 이벤트를 v-on 을 이용하여 받을 수 있음  
- 여기서 이벤트 핸들러는 자식 컴포넌트에서 방출되는 부가적인 인자를 받아서 처리해야 함  


## Slots  
부모 컴포넌트가 템플릿의 일부를 자식 컴포넌트에게 전달하는 방법  
- 자식 컴포넌트의 템플릿에서 slot 을 이용하여 사용 가능  

```html
<slot/>
<slot>전달받은 것이 없을 때</slot>  
```


# Vuex
state management library  
애플리케이션의 컴포넌트 사이에 데이터를 공유하기 위해 사용함  
(중앙 데이터 저장소)  

vuex lifecyle  
