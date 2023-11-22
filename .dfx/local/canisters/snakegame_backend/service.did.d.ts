import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'highestScoreHandler' : ActorMethod<[], bigint>,
  'updateHighestScore' : ActorMethod<[bigint], undefined>,
}
