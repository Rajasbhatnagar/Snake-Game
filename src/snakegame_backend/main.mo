actor {
   stable var highestScore : Nat = 0;

  public func updateHighestScore(score : Nat) {
    if (score > highestScore) {
      highestScore := score;
    };
  };

  public query func highestScoreHandler() : async Nat {
    return highestScore;
  }
};
