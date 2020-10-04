import axios from 'axios';
import { observable, action } from 'mobx';

class Session {
    @observable user;

    @action async loginAction() {
        var response = await axios.post('', {});
        console.log('status: ' + response.status);
    }
}

const self = new Session();
export default self;
