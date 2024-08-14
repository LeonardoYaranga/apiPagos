import { Injectable } from '@nestjs/common';
import { DataSnapshot, push, ref, set, get } from 'firebase/database';
import { firebaseDataBase } from 'src/firebaseConfig';

@Injectable()
export class PaymentService {
    async createPayment(data: any): Promise<void> {
        const dataRef = ref(firebaseDataBase, 'Payment');
        const newElementRef = push(dataRef, {dataRef: data});
        await set(newElementRef, {...data, userId: data.userId});  //aqui capaz se inserta un objeto con 2 userId ahi borrarle el userId extra
    }
 //Aqui debe ser que solo sean los pagos de ese usuario que tiene el token y por ende tiene el userId
    async getPayments(): Promise<any> {  
        const dataRef = ref(firebaseDataBase, 'Payment');
        const snapshot: DataSnapshot = await get(dataRef);
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            return null;
        }
    }

//Aqui se debe hacer un get de un solo pago por el id del pago y el userId
//Aqui se debe hacer un update de un solo pago por el id del pago y el userId
//Aqui se debe hacer un delete de un solo pago por el id del pago y el userId


}
