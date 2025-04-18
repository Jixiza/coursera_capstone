import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import PersonSelector from './PersonSelector';

// defaultValue={dayjs('2022-04-17T15:30')}

function Order(){
    return (
        <main>
            <section id="ordertitle">
                <h2>Order a table just in a few clicks!</h2>
                <p>We offer you a possibility to order a table ot or inside, don't hesitate and try out our online reservation form!</p>
            </section>
            <section>
                <div id="resDateTime">
                    
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Date reservation"/>
                          {/* <DemoContainer components={['DesktopTimePicker']} > */}
                            {/* <DemoItem label="Desktop variant"> */}
                            <DesktopTimePicker label="Time reservation"/>    
                         {/* </DemoItem> */}
                         {/* </DemoContainer> */}
                     </LocalizationProvider>
                </div>
                <p>Select number of persons</p>
                <PersonSelector />
            </section>
        </main>
    )
        
    
}

export default Order