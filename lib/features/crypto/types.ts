export interface GetCoinsParams {
  currency: string;
  page: number;
}

export interface GetCoinChartParams {
  coinId: string;
  currency: string;
  days: number;
}

export interface GetCoinChartRes {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
}

export interface GetCoinRes {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number | null;
  market_cap: number | null;
  market_cap_rank: number | null;
  fully_diluted_valuation: number | null;
  total_volume: number | null;
  high_24h: number | null;
  low_24h: number | null;
  price_change_24h: number | null;
  price_change_percentage_24h: number | null;
  market_cap_change_24h: number | null;
  market_cap_change_percentage_24h: number | null;
  circulating_supply: number | null;
  total_supply: number | null;
  max_supply: number | null;
  ath: number | null;
  ath_change_percentage: number | null;
  ath_date: string | null;
  atl: string | null;
  atl_change_percentage: number;
  atl_date: string;
  roi: {
    times: number;
    currency: string;
    percentage: number;
  } | null;
  last_updated: string;
}

export interface SearchCoinItem {
  id: string;
  name: string;
  api_symbol: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  large: string;
}

export interface GetSearchCoin {
  coins: SearchCoinItem[];
}

export interface GetCoinIdRes {
  id: string;
  symbol: string;
  name: string;
  webslug: string;
  asset_platform_id: string | null;

  platforms: Record<string, string>;
  detail_platforms: {
    decimal_place: number | null;
    contract_address: string;
    block_time_in_minutes: number | null;
  } | null;

  hashing_algorithm: string | null;
  block_time_in_minutes: number | null;

  categories: string[];
  preview_listing: boolean;
  public_notice: string | null;
  additional_notices: string[];

  localization: Record<string, string | null>;

  description: {
    [language_code: string]: string;
  };

  links: {
    homepage: string[];
    whitepaper: string | null;
    blockchain_site: string[];
    official_forum_url: string | null;
    chat_url: string | null;
    announcement_url: string | null;
    snapshot_url: string | null;
    twitter_screen_name: string | null;
    facebook_username: string | null;
    bitcointalk_thread_identifier: string | null;
    telegram_channel_identifier: string | null;
    subreddit_url: string | null;
    repos_url: {
      github: string[];
      bitbucket: string[];
    };
  };

  image: {
    thumb: string;
    small: string;
    large: string;
  };

  country_origin: string | null;
  genesis_date: string | null;

  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  watchlist_portfolio_users: number;

  market_cap_rank: number | null;

  market_data: {
    current_price: Record<string, number>;
    total_value_locked: number | null;
    mcap_to_tvl_ratio: number | null;
    fdv_to_tvl_ratio: number | null;
    roi: {
      times: number;
      currency: string;
      percentage: number;
    } | null;

    ath: Record<string, number>;
    ath_change_percentage: Record<string, number>;
    ath_date: Record<string, string>;

    atl: Record<string, number>;
    atl_change_percentage: Record<string, number>;
    atl_date: Record<string, string>;

    market_cap: Record<string, number>;
    fully_diluted_valuation: Record<string, number | null>;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;

    total_volume: Record<string, number>;

    high_24h: Record<string, number>;
    low_24h: Record<string, number>;

    price_change_24h: number;
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_14d: number;
    price_change_percentage_30d: number;
    price_change_percentage_60d: number;
    price_change_percentage_200d: number;
    price_change_percentage_1y: number;

    price_change_24h_in_currency: Record<string, number>;
    price_change_percentage_1h_in_currency: Record<string, number>;
    price_change_percentage_24h_in_currency: Record<string, number>;
    price_change_percentage_7d_in_currency: Record<string, number>;
    price_change_percentage_14d_in_currency: Record<string, number>;
    price_change_percentage_30d_in_currency: Record<string, number>;
    price_change_percentage_60d_in_currency: Record<string, number>;
    price_change_percentage_200d_in_currency: Record<string, number>;
    price_change_percentage_1y_in_currency: Record<string, number>;

    market_cap_change_24h_in_currency: Record<string, number>;
    market_cap_change_percentage_24h_in_currency: Record<string, number>;

    total_supply: number | null;
    max_supply: number | null;
    max_supply_infinite: boolean;
    circulating_supply: number | null;
    last_updated: string;
  };

  community_data: {
    facebook_likes: number | null;
    reddit_average_posts_48h: number;
    reddit_average_comments_48h: number;
    reddit_subscribers: number;
    reddit_accounts_active_48h: number;
    telegram_channel_user_count: number | null;
  };

  developer_data: {
    forks: number;
    stars: number;
    subscribers: number;
    total_issues: number;
    closed_issues: number;
    pull_requests_merged: number;
    pull_request_contributors: number;
    code_additions_deletions_4_weeks: {
      additions: number;
      deletions: number;
    };
    commit_count_4_weeks: number;
    last_4_weeks_commit_activity_series: number[];
  };

  status_updates: any[];

  tickers: {
    base: string;
    target: string;
    market: {
      name: string;
      identifier: string;
      has_trading_incentive: boolean;
    };
    last: number;
    volume: number;
    converted_last: {
      btc: number;
      eth: number;
      usd: number;
    };
    converted_volume: {
      btc: number;
      eth: number;
      usd: number;
    };
    trust_score: string | null;
    bid_ask_spread_percentage: number;
    timestamp: string;
    last_traded_at: string;
    last_fetch_at: string;
    is_anomaly: boolean;
    is_stale: boolean;
    trade_url: string | null;
    token_info_url: string | null;
    coin_id: string;
    target_coin_id?: string | null;
    coin_mcap_usd?: number;
  }[];

  last_updated: string;
}
