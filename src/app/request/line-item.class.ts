import { Product } from '../product/product.class';
import { Request } from '../request/request.class';

export class LineItem {

    id: number = 0;
    product: Product = new Product();
    request: Request = new Request();
    quantity: number = 0;
    
    


    constructor() {

    }
}

//requestId: number = 0;
