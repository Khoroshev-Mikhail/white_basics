import { useEffect } from "react";

export default function Pie(){
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.amcharts.com/lib/4/core.js';
    script1.async = true;
    script1.onload = () => {
      const script2 = document.createElement('script');
      script2.src = 'https://cdn.amcharts.com/lib/4/charts.js';
      script2.async = true;
      script2.onload = () => {
        const script3 = document.createElement('script');
        script3.src = 'https://cdn.amcharts.com/lib/4/themes/animated.js';
        script3.async = true;
        script3.onload = () => {
          const script = document.createElement('script');
          script.src = '/script/js.js';
          script.async = true;
          script.onload = () => {
            // Весь ваш код, который зависит от загруженных скриптов,
            // должен быть здесь
          };
          document.body.appendChild(script);
        };
        document.body.appendChild(script3);
      };
      document.body.appendChild(script2);
      setTimeout(()=>{
        const elementsWithAriaLabelledby = document.querySelectorAll('[aria-labelledby]');
        elementsWithAriaLabelledby.forEach(element => {
          console.log('ara')
          element.parentNode?.removeChild(element);
        });
      }, 2000);
    };
    document.body.appendChild(script1);
    
    return () => {

      document.body.removeChild(script1);

    };
  }, []);
  return(
    <div id="chartdiv" style={{width: '100%', minHeight: '400px'}}>
      
    </div>
  )
}
{/* <script src="https://cdn.amcharts.com/lib/4/core.js"></script> */}
{/* <script src="https://cdn.amcharts.com/lib/4/charts.js"></script> */}
{/* <script src="https://cdn.amcharts.com/lib/4/themes/animated.js"></script> */}