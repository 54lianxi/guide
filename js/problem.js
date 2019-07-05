Vue.component('pro1',{
    template: `
    <div>
    <div class="con2" style="background: linear-gradient(#C2ECC0,#8FD48C);"><a href="http://www.necta.online/lejun/guide/ground/buy_tile.html">瓷砖如何选购？</a></div>
    <div class="con2" style="background: linear-gradient(#FBC191,#F29A51);"><a href="http://www.necta.online/lejun/guide/ground/sew_beauty.html">美缝剂或填缝剂如何选购？</a></div>
    <div class="con2" style="background: linear-gradient(#B3E0FA,#51A5F2);"><a href="http://www.necta.online/lejun/guide/ground/gule.html">瓷砖胶(粘结剂)</a></div>
    <div class="con2" style="background: linear-gradient(#FBC191,#F29A51);" v-if="waterproof"><a href="http://www.necta.online/lejun/guide/ground/buy_waterproof.html">防水</a></div>
    <div class="con2" style="background: linear-gradient(#C1ECBF,#8FD48C);"><a href="http://www.necta.online/lejun/guide/ground/cement.html">水泥、黄沙</a></div>
    <div class="con2" style="background: linear-gradient(#B3DFF9,#52A6F2);"><a href="http://www.necta.online/lejun/guide/ground/construct.html">瓷砖、大理石地面施工要点</a></div>
</div>
    `,
    props:['waterproof']
})
Vue.component('pro2',{
    template: `
    <div>
                    <div class="con2" style="background: linear-gradient(#C2ECC0,#8FD48C);"><a href="http://www.necta.online/lejun/guide/ground/wood_type.html">木地板如何选购？</a></div>
                    <div class="con2" style="background: linear-gradient(#FBC191,#F29A51);"><a href="http://www.necta.online/lejun/guide/ground/wood_detail.html">采购前需要注意哪些细节？</a></div>
             </div>
    `
})
Vue.component('pro3',{
    template: `
    <div>
    <div class="con2" style="background: linear-gradient(#C2ECC0,#8FD48C);"><a href="http://www.necta.online/lejun/guide/ground/buy_dali.html">大理石如何选购？</a></div>
    <div class="con2" style="background: linear-gradient(#FBC191,#F29A51);"><a href="http://www.necta.online/lejun/guide/ground/construct.html">大理石地面施工要点</a></div>
</div>
    `
})
Vue.component('pro4',{
    template: `
    <div>
    <div class="con2" style="background: linear-gradient(#C2ECC0,#8FD48C);"><a href="http://www.necta.online/lejun/guide/door/glass.html">铝合金门窗（玻璃、五金、胶条、毛条）</a></div>
    <div class="con2" style="background: linear-gradient(#FBC191,#F29A51);"><a href="http://www.necta.online/lejun/guide/door/surface_handle.html">铝合金门窗（型材表面处理方法）</a></div>
    <div class="con2" style="background: linear-gradient(#B3E0FA,#51A5F2);"><a href="http://www.necta.online/lejun/guide/door/other.html">铝合金门窗（其他要点）</a></div>
</div>
    `
})

Vue.component('pro5',{
    template: `
    <div>
    <div class="con2" style="background: linear-gradient(#C2ECC0,#8FD48C);"><a href="http://www.necta.online/lejun/guide/counter/counter_problem.html">橱柜常见问题</a></div>
    <div class="con2" style="background: linear-gradient(#FBC191,#F29A51);"><a href="http://www.necta.online/lejun/guide/counter/counter_type.html">柜门种类</a></div>
    <div class="con2" style="background: linear-gradient(#B3E0FA,#51A5F2);"><a href="http://www.necta.online/lejun/guide/counter/mesa.html">台面种类</a></div>
    <div class="con2" style="background: linear-gradient(#FBC191,#F29A51);"><a href="http://www.necta.online/lejun/guide/counter/wujin.html">柜体五金选购</a></div>
</div>
    `
})