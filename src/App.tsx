import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { pdfType } from './types/pdf';
import ListContainer from './components/ListContainer';
import PdfView from './components/PdfView';

function App() {
  const [pdfs, setPdfs] = useState<pdfType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('https://api.npoint.io/dee51ea017d20efdfcc8')
      .then((response) => {
        const pdfsWithIds = response.data.map((pdf: Omit<pdfType, "id">, index: number) => ({
          ...pdf,
          id: `${index + 1}`,
        }));
        setPdfs(pdfsWithIds);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Failed to load PDFs. Please try again later.');
      });
  }, []);

  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<ListContainer pdfs={pdfs} />} />
          <Route path="/pdf/:id" element={<PdfView pdfs={pdfs} />} />
        </Routes>
        {error && <div className="error">{error}</div>}
      </main>
    </Router>
  );
}

export default App;
