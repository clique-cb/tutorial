import { Field, SmartContract, state, State, method } from 'snarkyjs';

/**
 * Basic Example
 * See https://docs.minaprotocol.com/zkapps for more info.
 *
 * The Add contract initializes the state variable 'num' to be a Field(1) value by default when deployed.
 * When the 'update' method is called, the Add contract adds Field(2) to its 'num' contract state.
 *
 * This file is safe to delete and replace with your own contract.
 */
export class Wallet extends SmartContract {
  @state(Field) tokens = State<Field>();

  init() {
    super.init();
    this.tokens.set(Field(3));
  }

  @method update() {
    const currentState = this.tokens.getAndAssertEquals();
    const newState = currentState.add(2);
    this.tokens.set(newState);
  }
}
