<template>
  <div>
    <q-uploader
      url="http://localhost:4444/upload"
      :headers="[{ name: 'X-Custom-Timestamp', value: 1550240306080 }]"
      multiple
      flat
      square
      bordered
      auto-upload
      style="width: 100%;"
      :class="$currTheme.value"
      v-model="value"
      @finish="finish"
    >
      <template v-slot:header="scope">
        <div class="row no-wrap items-center " :class="$currTheme.value">
          <div class="col">
            <div class="q-uploader__subtitle">
              {{ scope.uploadSizeLabel }} / {{ scope.uploadProgressLabel }}
            </div>
          </div>
          <q-btn
            v-if="scope.canAddFiles"
            type="a"
            icon="add_box"
            @click="scope.pickFiles"
            round
            dense
            flat
          >
            <q-uploader-add-trigger />
            <q-tooltip>Pick Files</q-tooltip>
          </q-btn>
          <q-btn
            v-if="scope.queuedFiles.length > 0"
            icon="clear_all"
            @click="scope.removeQueuedFiles"
            round
            dense
            flat
          >
            <q-tooltip>Clear All</q-tooltip>
          </q-btn>
        </div>
      </template>
      <template v-slot:list="scope">
        <q-scroll-area
          style="height: 90px"
          :thumb-style="thumbStyle"
          :bar-style="barStyle"
        >
          <q-list separator class="row no-wrap">
            <q-item v-for="file in scope.files" :key="file.__key">
              <q-item-section v-if="file.__img" thumbnail top no-wrap avatar>
                <img :src="file.__img.src" />
                <span class="full-width ellipsis">{{ file.name }}</span>
                <span class="absolute-left"
                  ><q-btn
                    fab
                    color="red"
                    class="gt-xs"
                    size="22px"
                    flat
                    dense
                    round
                    icon="close"
                    @click="scope.removeFile(file)"
                /></span>
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </template>
    </q-uploader>
  </div>
</template>

<script lang="ts" setup name="upload">
const emits = defineEmits(["update:modelValue"]);
const thumbStyle = {
  right: "4px",
  borderRadius: "5px",
  backgroundColor: "#027be3",
  width: "5px",
  opacity: 0.75,
};

const barStyle = {
  right: "2px",
  borderRadius: "9px",
  backgroundColor: "#027be3",
  width: "9px",
  opacity: 0.2,
};

const value = ref([]);
function finish() {
  console.log(value.value);
  emits("update:modelValue", value.value);
}
</script>
