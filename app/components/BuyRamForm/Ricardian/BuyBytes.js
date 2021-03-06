import React from 'react';

const BuyBytes = () => (
  <p>
    This action will attempt to reserve about {'{bytes}'}
    bytes of RAM on behalf of {'{receiver}'}. <br />
    <br /> {'{buyer}'}
    authorizes this contract to transfer sufficient EOS tokens to buy the RAM based upon the current price as determined
    by the market maker algorithm. <br />
    <br /> {'{buyer}'}
    accepts that a 0.5 % fee will be charged on the EOS spent and that the actual RAM received may be slightly less than
    requested due to the approximations necessary to enable this service. {'{buyer}'} accepts that a 0.5 % fee will be
    charged if and when they sell the RAM received. {'{buyer}'}
    accepts that rounding errors resulting from limits of computational precision may result in less RAM being
    allocated. {'{buyer}'}
    acknowledges that the supply of RAM may be increased at any time up to the limits of off - the - shelf computer
    equipment and that this may result in RAM selling for less than purchase price. {'{buyer}'}
    acknowledges that the price of RAM may increase or decrease over time according to supply and demand.
    {'{buyer}'}
    acknowledges that RAM is non - transferable. {'{buyer}'}
    acknowledges RAM currently in use by their account cannot be sold until it is freed and that freeing RAM may be
    subject to terms of other contracts.
  </p>
);

export default BuyBytes;
