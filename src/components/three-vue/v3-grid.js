import * as THREE from 'three'
import THREEObjectMixin from '@/components/three-vue/v3-object.mixin'

const threeProps = {
  position: {
    default: () => [0, 0, 0]
  }
  , rotation: {
    default: () => [0, 0, 0]
  }
}

export default {
  name: 'v3-grid'
  , mixins: [ THREEObjectMixin ]
  , props: {
    ...threeProps
    , size: {
      type: Number
      , default: 10
    }
    , divisions: {
      type: Number
      , default: 64
    }
    , color1: {
      type: Number
      , default: 0x444444
    }
    , color2: {
      type: Number
      , default: 0x888888
    }
  }
  , components: {
  }
  , data: () => ({
  })
  , methods: {
    createObject(){
      this.v3object = new THREE.GridHelper(
        this.size
        , this.divisions
        , this.color1
        , this.color2
      )
    }
    , updateObjects(){
      let obj = this.v3object
      obj.material.dispose()
      obj.geometry.dispose()
      this.createObject()
      obj.material = this.v3object.material
      obj.geometry = this.v3object.geometry
      this.v3object = obj
      this.assignProps( this.v3object, threeProps )
    }
  }
}
