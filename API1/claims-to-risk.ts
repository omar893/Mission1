type claims = { claim_history: String };

const claimToRisk = (claimHistory: claims) => {
  if (claimHistory.claim_history === "" || claimHistory.claim_history === " ") {
    return { error: "cannot have an empty input" };
  }
  
  if (!isNaN(+claimHistory.claim_history)) {
    return { error: "cannot input numbers" };
  }
  //have to add some string in case one of the keywords is at the start or end of the claim
    const formattedClaim = "." + claimHistory.claim_history + ".";
    const collideCount = formattedClaim.toLowerCase().split("collide").length - 1;
    const crashCount = formattedClaim.toLowerCase().split("crash").length - 1;
    const scratchCount = formattedClaim.toLowerCase().split("scratch").length - 1;
    const bumpCount = formattedClaim.toLowerCase().split("bump").length - 1;
    const smashCount = formattedClaim.toLowerCase().split("smash").length - 1;
    const totalRisk = collideCount + crashCount + scratchCount + bumpCount + smashCount;

    return { risk_rating: totalRisk };
};

export default claimToRisk;