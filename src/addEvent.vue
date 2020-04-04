<template>
    <div id="add-event-card">
        <div class="add-event-section" id="add-event-time">
            <input type="text" placeholder="年">
            <input type="text" placeholder="月">
            <input type="text" placeholder="日">
            <!-- <input type="text" v-model="add-event-hour" placeholder="时">
            <input type="text" v-model="add-event-minute" placeholder="分">
            <input type="text" v-model="add-event-second" placeholder="秒"> -->
        </div>
        <div class="add-event-section" id="add-event-title">
            <input type="text" placeholder="名称">
        </div>
        <div class="add-event-section" id="add-event-description">
            <input type="text" placeholder="描述">
        </div>
        <div class="add-event-section" id="add-event-act">
            <button class="add-event-btn" id="add-event-cancel-btn">取消</button>
            <button class="add-event-btn" id="add-event-confirm-btn">确定</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "add-event-card",
        date() {
            return {}
        }
    }
</script>