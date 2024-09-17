<template>
  <q-card
    flat
    bordered
  >
    <q-card-section>
      <div class="row items-center no-wrap">
        <div class="col">
          <div class="text-h6 text-weight-bold">
            {{ getName }}
          </div>
        </div>
        <div class="col-auto">
          <q-btn
            :to="getUrl"
            color="accent"
            dense
            flat
            icon-right="eva-arrow-forward-outline"
            no-caps
            label="详情"
            size="md"
            class="text-weight-bold"
          />
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="row items-center q-col-gutter-md">
        <div class="col-12 col-sm-6">
          <Doughnut
            :data="getChartdata()"
            :options="options"
          />
        </div>
        <div class="col-12 col-sm-6">
          <q-list>
            <q-item class="label-state">
              <q-item-section avatar>
                <avatar-state state="positive" />
              </q-item-section>
              <q-item-section class="label-state-text">
                <q-item-label>成功</q-item-label>
                <q-item-label
                  caption
                  lines="1"
                >
                  {{ getSuccess(true) }}%
                </q-item-label>
              </q-item-section>
              <q-item-section
                side
                class="label-state-side"
              >
                {{ getSuccess() }}
              </q-item-section>
            </q-item>
            <q-item class="label-state">
              <q-item-section avatar>
                <avatar-state state="warning" />
              </q-item-section>
              <q-item-section class="label-state-text">
                <q-item-label>警告</q-item-label>
                <q-item-label
                  caption
                  lines="1"
                >
                  {{ getWarnings(true) }}%
                </q-item-label>
              </q-item-section>
              <q-item-section
                side
                class="label-state-side"
              >
                {{ getWarnings() }}
              </q-item-section>
            </q-item>
            <q-item class="label-state">
              <q-item-section avatar>
                <avatar-state state="negative" />
              </q-item-section>
              <q-item-section class="label-state-text">
                <q-item-label>错误</q-item-label>
                <q-item-label
                  caption
                  lines="1"
                >
                  {{ getErrors(true) }}%
                </q-item-label>
              </q-item-section>
              <q-item-section
                side
                class="label-state-side"
              >
                {{ getErrors() }}
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'
import Helps from '../../_helpers/Helps'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import AvatarState from '../_commons/AvatarState.vue'

ChartJS.register(ArcElement, Tooltip, Legend)

export default defineComponent({
  name: 'PanelChart',
  components: {
    Doughnut,
    AvatarState
  },
  props: {
    name: { type: String, default: undefined, required: false },
    data: { type: Object, default: undefined, required: false },
    type: { type: String, default: undefined, required: false }
  },
  data () {
    return {
      loading: true,
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        animation: {
          duration: 1000
        },
        tooltips: {
          enabled: true
        }
      }
    }
  },
  computed: {
    getName () {
      const name = Helps.capFirstLetter(this.name)
      switch (name) {
        case 'Routers':
          return '路由'

        case 'Services':
          return '服务'

        case 'Middlewares':
          return '中间件'
      }
      return name
    },
    getUrl () {
      const name = this.getName.toLowerCase();
      switch (name) {
        case '路由':
          return `/${this.type}/routers`
        case '服务':
          return `/${this.type}/services`
        case '中间件':
          return `/${this.type}/middlewares`
      }
      return `/${this.type}/${name}`
    }
  },
  methods: {
    getSuccess (inPercent = false) {
      const num = this.data.total - (this.data.errors + this.data.warnings)
      let result = 0
      if (inPercent) {
        result = Helps.getPercent(num, this.data.total).toFixed(0)
      } else {
        result = num
      }
      return isNaN(result) || result < 0 ? 0 : result
    },
    getWarnings (inPercent = false) {
      const num = this.data.warnings
      let result = 0
      if (inPercent) {
        result = Helps.getPercent(num, this.data.total).toFixed(0)
      } else {
        result = num
      }
      return isNaN(result) || result < 0 ? 0 : result
    },
    getErrors (inPercent = false) {
      const num = this.data.errors
      let result = 0
      if (inPercent) {
        result = Helps.getPercent(num, this.data.total).toFixed(0)
      } else {
        result = num
      }
      return isNaN(result) || result < 0 ? 0 : result
    },
    getData () {
      return [this.getSuccess(), this.getWarnings(), this.getErrors()]
    },
    getChartdata () {
      if (this.getData()[0] === 0 && this.getData()[1] === 0 && this.getData()[2] === 0) {
        this.options.tooltips.enabled = false
        return {
          datasets: [{
            backgroundColor: [
              this.$q.dark.isActive ? '#2d2d2d' : '#f2f3f5'
            ],
            borderColor: [
              this.$q.dark.isActive ? '#1d1d1d' : '#fff'
            ],
            data: [1]
          }]
        }
      } else {
        this.options.tooltips.enabled = true
        return {
          datasets: [{
            backgroundColor: [
              '#00a697',
              '#db7d11',
              '#ff0039'
            ],
            borderColor: [
              this.$q.dark.isActive ? '#1d1d1d' : '#fff',
              this.$q.dark.isActive ? '#1d1d1d' : '#fff',
              this.$q.dark.isActive ? '#1d1d1d' : '#fff'
            ],
            data: this.getData()
          }],
          labels: [
            'Success',
            'Warnings',
            'Errors'
          ]
        }
      }
    }
  }
})
</script>

<style scoped lang="scss">
  @import "../../css/sass/variables";

  .label-state {
    min-height: 32px;
    padding: 8px;
    .q-item__section--avatar{
      min-width: 32px;
      padding: 0 8px 0 0;
    }
    &-text{
      .q-item__label{
        font-size: 16px;
        line-height: 16px !important;
        font-weight: 600;
      }
      .q-item__label--caption{
        font-size: 14px;
        line-height: 14px !important;
        font-weight: 500;
        color: $app-text-grey;
      }
    }
    &-side{
      font-size: 22px;
      font-weight: 700;
      padding: 0 0 0 8px;
      color: inherit;
    }
  }
</style>
