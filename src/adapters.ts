import { Adapter } from "./gc-adapter";

export class NintendoAdapter extends Adapter {
	constructor() {
		super(0x057e, 0x0337);
	}
}

export class LosslessAdapter extends Adapter {
	constructor() {
		super(0x2e8a, 0x102b);
	}
}
