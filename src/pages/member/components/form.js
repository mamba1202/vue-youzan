import Address from 'js/addressService.js'

export default {
    data() {
        return {
            name: '',
            tel: '',
            provinceValue: -1,
            cityValue: -1,
            districtValue: -1,
            address: '',
            id: '',
            type: '',
            instance: '',
            addressData: require('js/address.json'),
            cityList: null,
            districtList: null,
            // type: this.$route.query.type,
            // instance: this.$router.query.instance
        }
    },
    created() {
        let query = this.$route.query
        this.type = query.type
        this.instance = query.instance
    },
    methods:{
        add(){
            //需要做非空和合法性校验
       let {name,tel,provinceValue,cityValue,districtValue,address} = this
          let data ={name,tel,provinceValue,cityValue,districtValue,address}
          if(this.type=='add'){
              Address.add(data).then(res=>{   
                  this.$router.go(-1)   //保存成功后 --返回上一页也就是跳转到地址列表
              })
          }
        }
    },
    //监听provinceValue的变化拿到市级信息
    watch: {
        provinceValue(val) {
            if (val == -1) return
            //找到省级在列表中的位置通过位置拿到他的下一级列表
            let list = this.addressData.list
            let index = list.findIndex(item=>{
                return item.value === val
                //找到省级在列表中的下标
            })
            this.cityList = list[index].children
            //找到省级的下一级
            //当切换省时 后边市区都选了  恢复默认状态
            this.cityValue = -1
            this.districtValue = -1
        },
        cityValue(val) {
            if (val == -1) return
            let list = this.cityList
            let index = list.findIndex(item=>{
                return item.value === val
            })
            this.districtList = list[index].children
            this.districtValue = -1
        }
    }
}