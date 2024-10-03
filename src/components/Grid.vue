<template>
  <div class="full-height">
    <DataTable 
      :value="data" 
      :paginator="true" 
      :rows="5" 
      :scrollable="true"
      scrollHeight="flex"
      selectionMode="multiple" 
      v-model:selection="selectedRows"
      dataKey="id"
    >
      <!-- Checkbox Column: allows independent row selection -->
      <Column selectionMode="multiple" headerStyle="width: 3rem">
        <template #body="slotProps">
          <input 
            type="checkbox" 
            :checked="isSelected(slotProps.data)" 
            @change="toggleSelection(slotProps.data)" 
          />
        </template>
      </Column>

      <!-- Image Column -->
      <Column field="id" header="#" />

      <!-- Country Column -->
      <Column field="country" header="나라" sortable />

      <!-- Friend Name Column -->
      <Column field="friendName" header="친구이름" sortable />

      <!-- Public/Private Toggle Column with event stop -->
      <Column field="public" header="공개">
        <template #body="slotProps">
          <InputSwitch v-model="slotProps.data.public" @click.stop />
        </template>
      </Column>

      <!-- Registration Date Column -->
      <Column field="registrationDate" header="등록일" sortable />

      <!-- Settings Column (설정) -->
      <Column field="settings" header="설정">
        <template #body="slotProps">
          <div class="settings">
            <span class="action text-purple">복사</span>
            <span class="action text-purple">수정</span>
            <span class="action text-purple">이미지관리</span>
            <span class="action text-mehroon">삭제</span>
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputSwitch from 'primevue/inputswitch'; // For toggle switch
import Button from 'primevue/button'; // For the buttons in the settings

export default {
  components: {
    DataTable,
    Column,
    InputSwitch,
    Button
  },
  data() {
    return {
      data: [
        { id: 6, country: '베트남', friendName: '따황비', public: true, registrationDate: '2024년 3월 1일' },
        { id: 5, country: '몽골', friendName: '따황비', public: false, registrationDate: '2024년 3월 1일' },
        { id: 4, country: '베트남', friendName: '따황비', public: true, registrationDate: '2024년 3월 1일' },
        { id: 3, country: '몽골', friendName: '따황비', public: true, registrationDate: '2024년 3월 1일' },
        { id: 2, country: '베트남', friendName: '따황비', public: false, registrationDate: '2024년 3월 1일' },
        { id: 1, country: '몽골', friendName: '따황비', public: true, registrationDate: '2024년 3월 1일' }
      ],
      selectedRows: [] // For storing the selected rows
    };
  },
  methods: {
    // Check if the row is selected
    isSelected(rowData) {
      return this.selectedRows.includes(rowData);
    },
    // Toggle the row selection when the checkbox is clicked
    toggleSelection(rowData) {
      const index = this.selectedRows.indexOf(rowData);
      if (index > -1) {
        this.selectedRows.splice(index, 1); // Unselect the row
      } else {
        this.selectedRows.push(rowData); // Select the row
      }
    }
  }
};
</script>

<style scoped>
/* Style for the settings column */
.settings {
  display: flex;
  gap: 10px;
}

/* Styling the action links */
.action {
  cursor: pointer;
  font-weight: bold;
}



</style>
