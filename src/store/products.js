import { firebaseAction } from 'vuexfire';
import db from '@/db';

const state = {
    products: ['jiml'],
};

const actions = {
    init: firebaseAction(({ bindFirebaseRef }) => {
       bindFirebaseRef('products', db.collection('products'));
    }),
};

export default {
    namespaced: true,
    state,
    actions,      
}