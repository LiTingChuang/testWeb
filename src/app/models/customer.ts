export interface Customer {
     // 姓名
    name: string;
     // 客戶編號      
    customer_id: string; 
    // 背景資訊 -> ? = 非必填欄位
    background_info?: string;
    // 手機
    cell_phone: string;
    // 初次接觸日期
    date_init_contact: {  
        day: number,
        month: number,
        year: number
    }; 
}

// 增加firestore特有的"亂數id"欄位
export interface CustomerId extends Customer { 
    id: string; 
  }