function generateBarcodes() {
    var barcodeData = document.getElementById('barcodeData').value.split('\n');
  
    var barcodeWrapper = document.querySelector('.barcode-wrapper');
    barcodeWrapper.innerHTML = '';
  
    barcodeData.forEach(function (data, index) {
      if (data.trim() !== '') {
        var barcodeContainer = document.createElement('div');
        barcodeContainer.classList.add('barcode-container');
  
        var barcodeItem = document.createElement('div');
        barcodeItem.classList.add('barcode-item');
        barcodeItem.id = 'barcode-' + index;
  
        var barcodeCanvas = document.createElement('canvas');
        JsBarcode(barcodeCanvas, data.trim(), {
          format: 'CODE128',
          lineColor: '#000',
          width: 2,
          height: 40,
          displayValue: true
        });

        // 获取按钮元素和输入框元素
        var clearButton = document.getElementById('clearButton');
        var barcodeDataInput = document.getElementById('barcodeData');

        // 绑定点击事件
        clearButton.addEventListener('click', function() {
        // 清空输入框内容
        barcodeDataInput.value = '';
        });
  
        barcodeItem.appendChild(barcodeCanvas);
        barcodeContainer.appendChild(barcodeItem);
        
        // 根据奇偶数设置对齐样式
        if (index % 2 === 0) {
          barcodeContainer.classList.add('barcode-left');
        } else {
          barcodeContainer.classList.add('barcode-right');
        }
  
        barcodeWrapper.appendChild(barcodeContainer);
  
        // 每生成两个容器后添加一个换行符
        if (index % 2 === 1) {
          var br = document.createElement('br');
          br.classList.add('barcode-break');
          barcodeWrapper.appendChild(br);
        }
      }
    });
  }