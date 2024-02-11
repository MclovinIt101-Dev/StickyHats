/**
 * Prevents the player from losing accessories (hats, glasses, etc.) when taking damage.
 * This function runs continuously in the background.
 *
 * @see SetPedCanLosePropsOnDamage
 */
Citizen.CreateThread(async () => {
  let lastPed;

  while (true) {
    const playerPedId = PlayerPedId();

    if (playerPedId !== lastPed) {
      lastPed = playerPedId;
      SetPedCanLosePropsOnDamage(playerPedId, false, 0);
    }

    await Citizen.Wait(100);
  }
});
