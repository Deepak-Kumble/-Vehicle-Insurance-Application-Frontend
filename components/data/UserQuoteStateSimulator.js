const State = {
  user_id: {
    counter: 2,
    quote1: null,
    quote2: null,
    quote3: null,
    quote4: null,
  },
};

function GetQuoteStateStore() {
  let data = JSON.parse(localStorage.getItem("quote_state_store") ?? "{}"); // TODO: Handle null case
  return new Map(Object.entries(data));
}

function SetQuoteStateStore(val) {
  localStorage.setItem("quote_state_store", JSON.stringify(val));
}

export function lol(user_id, quote_num, quote_data, counter_val) {
  let x = GetQuoteStateStore();
  let user_data = x.get(user_id.toString());

  if (user_data) {
    user_data.counter = counter_val;
    user_data[quote_num] = quote_data;

    x.set(user_id, user_data);
  } else {
    let newx = new QuoteState();
    newx.counter = counter_val;
    newx.setQuote(quote_num, quote_data);

    x.set(user_id, newx.toObject());
  }

  localStorage.setItem("quote_state_store", JSON.stringify(Object.fromEntries(x.entries())));
}

export function GetUserQuoteState(user_id, quote_num) {
  let x = GetQuoteStateStore();
  let user_data = x.get(user_id.toString());

  if (user_data) {
    return user_data[quote_num.toString()];
  }
  else null;
}

export function DeleteUserState(user_id) {
  let x = GetQuoteStateStore();
  x.delete(user_id.toString());

  localStorage.setItem("quote_state_store", JSON.stringify(Object.fromEntries(x.entries())));
}

class QuoteState {
  // constructor() {
  //   this.counter = 0;
  //   this.quote1 = null;
  //   this.quote2 = null;
  //   this.quote3 = null;
  //   this.quote4 = null;
  // }

  constructor(val = null) {
    this.counter = val?.counter ?? 0;
    this.quote1 = val?.quote1;
    this.quote2 = val?.quote2;
    this.quote3 = val?.quote3;
    this.quote4 = val?.quote4;
  }

  setQuote(quoteid, val) {
    this[quoteid] = val;
  }

  toObject() {
    let { ...obj } = this;
    return obj;
  }
}
