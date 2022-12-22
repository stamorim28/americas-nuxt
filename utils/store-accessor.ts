import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import Countries from '@/store/countries'

/* eslint-disable import/no-mutable-exports */
let countries: Countries

const initializeStores = (store: Store<any>): void => {
  countries = getModule(Countries, store)
}

export { initializeStores, countries }
