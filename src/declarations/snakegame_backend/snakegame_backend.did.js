export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'highestScoreHandler' : IDL.Func([], [IDL.Nat], ['query']),
    'updateHighestScore' : IDL.Func([IDL.Nat], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
