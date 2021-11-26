import React from 'react';
import { jsPDF } from "jspdf";

// const doc = new jsPDF();

export default function PdfViewer() {
    function Dpdf() {
        
        const doc = new jsPDF();

        doc.text("Hello world!", 10, 10);
        doc.save("a4.pdf");
    }
    return (
        <div style={{ padding: '100px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button type="button" onClick={Dpdf}> Generate pdf</button>
            </div>
        </div>
    );
}
