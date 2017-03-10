const msgpack = require('msgpack5')();

export class MsgpackSerializer {
    constructor () {
        this.protocol = 'msgpack';
        this.binaryType = 'arraybuffer';
    }

    encode (data) {
        return msgpack.encode(data);
    }

    decode (data) {
        return msgpack.decode(new Uint8Array(data));
    }
}
