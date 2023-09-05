export const reducer=(state,action) =>{

    let copyop=state.op
  
  
    let copyres=state.res.split('')
    let lastres=copyres.splice(-1,1)
    lastres=lastres[0]
    copyres=copyres.join('')

    const checkPoint=()=> {
        return copyop.split('').includes('.')
    }

    const deleteOp=()=> {
        copyop= copyop.slice(0,-1)
        return copyop
    }

  
   
    


    const calc=(operation,bol)=> {
        let res
        switch(lastres) {
            case('+'):
                res= (parseFloat(copyres)+parseFloat(copyop)).toString()
                break;
            case('-'):
                res= (parseFloat(copyres)-parseFloat(copyop)).toString()
                break;
            case('*'):
                res= (parseFloat(copyres)*parseFloat(copyop)).toString()
                break;
            case('/'):
                res= (parseFloat(copyres)/parseFloat(copyop)).toString()
                break;
            case('%'):
                res= (parseFloat(copyres)%parseFloat(copyop)).toString()
                break;
            default:
        }
        let val
        bol?val= `${res}`:val= `${res}${operation}`
        return val
    }
   
 
    switch(action.type) {
        case('number'):
        return{...state,op:state.op==='0'?action.payload:`${state.op}${action.payload}`}
        case('='):
        return {res:'',op:state.res===''?state.op:calc('=',true)}
        case('+'):
        return{res:  state.op==='' ?  state.res  :  state.res===''  ?  `${state.op}+`  :  calc('+')  ,  op:''}
        case('-'):
        return{res:  state.op==='' ?  state.res  :  state.res===''  ?  `${state.op}-`  :  calc('-')  ,  op:''}
        case('*'):
        return{res:  state.op==='' ?  state.res  :  state.res===''  ?  `${state.op}*`  :  calc('*')  ,  op:''}
        case('/'):
        return{res:  state.op==='' ?  state.res  :  state.res===''  ?  `${state.op}/`  :  calc('/')  ,  op:''}
        case('%'):
        return{res:  state.op==='' ?  state.res  :  state.res===''  ?  `${state.op}%`  :  calc('%')  ,  op:''}
        case('AC'):
        return {res:'',op:'0'}
        case('.') :
        return{...state,op: checkPoint()||state.op===''?state.op:`${state.op}.`}
        case('del'):
        return {...state,op:state.op.length===1?'0':deleteOp()}

        default:
            return
    } 
}