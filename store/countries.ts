import { config, Module, VuexModule, Mutation, Action} from 'vuex-module-decorators'

import { Country } from '@/types'
import { $axios } from '@/utils/nuxt-instance'

interface Show {
  ccn3: Country ['ccn3']
}

config.rawError = true

@Module({ name: 'countries', stateFactory: true, namespaced: true })

export default class Countries extends VuexModule {
  private countries = [] as Country []
  private country = {} as Country

  public get $all() {
    return this.countries
  }

  public get $single() {
    return this.country
  }

  @Mutation
  private SET_ALL(countries: Country[]) {
    this.countries = countries
  }

  @Mutation
  private SET_SINGLE(country: Country) {
    this.country = country
  }

  @Action
  public async index() {
    try {
      const countries = await $axios.$get('/region/americas')
      this.context.commit('SET_ALL', countries)
    } catch (error) {
      alert(error)
    }
  }

  @Action
  public async show({ ccn3 }: Show) {
    try {
      const country = await $axios.$get(`/alpha/${ccn3}`)
      this.context.commit('SET_SINGLE', country)
    } catch (error) {
      alert(error)
    }
  }

}
