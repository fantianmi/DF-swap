import { MenuEntry } from 'dfswap-ui'

export interface ContextApi {
  translate: (code: number, language: string) => string
}

const farmUrl = "http://dfw.btcsoft.cn"

const config: (translate: ContextApi['translate']) => MenuEntry[] = (TranslateString) => [
  {
    label: TranslateString(670, 'Home'),
    icon: 'HomeIcon',
    href: `${farmUrl}`,
  },
  {
    label: TranslateString(672, 'Trade'),
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: TranslateString(284, 'Exchange'),
        href: '/swap'
      },
      {
        label: TranslateString(686, 'Liquidity'),
        href: '/pool'
      }
    ]
  },
  {
    label: TranslateString(674, 'Farm'),
    icon: 'FarmIcon',
    href: `${farmUrl}/#/farms`,
  },
  {
    label: TranslateString(676, 'Pools'),
    icon: 'PoolIcon',
    href: `${farmUrl}/#/pools`,
  },
  {
    label: TranslateString(20020, 'Refferals'),
    icon: 'referralIcon',
    href: `${farmUrl}/#/refferals`,
  },
  {
    label: TranslateString(708, 'Lottery'),
    icon: 'TicketIcon',
    href: `${farmUrl}/#/Lottery`,
  },
  // {
  //   label: TranslateString(20000,'Roulette'),
  //   icon: 'TicketIcon2',
  //   href: `${farmUrl}/#/roulette`,
  // },
]

export default config
