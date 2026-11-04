function cleanOptionText(optText) {
  if (!optText || typeof optText !== 'string') return optText;
  let text = optText;

  // 1. Calculations, formulas & conversion spoilers
  text = text.replace(/\s*\(\s*(đã|chưa)\s+(nhân|tính)\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*tương\s+(đương|ứng)\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*khoảng\s+\d+%.*?\)/gi, '');
  text = text.replace(/\s*\(\s*chiếm\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*thông\s+số\s+tối\s+ưu\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*trong\s+khoảng\s+\d+\s*-\s*\d+\s*mmHg\s*\)/gi, '');
  text = text.replace(/\s*\(\s*trên\s+200\s+giờ\s*\)/gi, '');
  text = text.replace(/\s*\(\s*thường\s+bằng\s+10\s*-\s*1\/6\s+tổng\s+liều\s+24h\s*\)/gi, '');
  text = text.replace(/\s*\(\s*bằng\s+1\/10\s+đến\s+1\/6\s+liều\s+24\s+giờ\s*\)/gi, '');
  text = text.replace(/\s*\(\s*3\,9\s*-\s*6\,1\s*mmol\/L\s*\)/gi, '');
  text = text.replace(/\s*\(\s*7\,[07]\s*mmol\/L\s*\)/gi, '');
  text = text.replace(/\s*\(\s*500\s*mg\/dL\s*\)/gi, '');
  text = text.replace(/\s*\(\s*30\s*-\s*50%\s*\)/gi, '');
  text = text.replace(/\s*\(\s*đã\s+giảm\s+\d+\s*-\s*\d+%\s*\)/gi, '');
  text = text.replace(/\s*\(\s*0\,5\s*mg\s*\)/gi, '');
  text = text.replace(/\s*\(\s*FEV1\s+tăng\s+>[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*FEV1\s*<\s*50%\s*\)/gi, '');
  text = text.replace(/\s*\(\s*giảm\s+1\s+kg\s+giảm\s+~1\s+mmHg\s+huyết\s+áp\s*\)/gi, '');
  text = text.replace(/\s*\(\s*<\s*5g\s*muối\/ngày\s*\)/gi, '');
  text = text.replace(/\s*\(\s*khoảng\s+3\,5g\s*\)/gi, '');
  text = text.replace(/\s*\(\s*1\s*-\s*3\s*phút\s*\)/gi, '');
  text = text.replace(/\s*\(\s*200mL\s*\)/gi, '');
  text = text.replace(/\s*\(\s*mL\s*\)/gi, '');
  text = text.replace(/\s*\(\s*kg\s*\)/gi, '');
  text = text.replace(/\s*\(\s*mất\s*>\s*10%\s*thể\s*trọng\s*\)/gi, '');
  text = text.replace(/\s*\(\s*≥\s*2\s*đợt\/năm[^)]*\)/gi, '');
  text = text.replace(/\s*\(\s*cách\s+rốn\s+tối\s+thiểu\s+\d+\s*cm\s*\)/gi, '');
  text = text.replace(/\s*\(\s*trong\s+vòng\s+\d+\s*-\s*\d+\s*phút\s*\)/gi, '');
  text = text.replace(/\s*\(\s*7\s*-\s*10\s*ngày\s*\)/gi, '');
  text = text.replace(/\s*\(\s*24\s*-\s*36h\s*\)/gi, '');

  // 2. Clinical alternatives inside parens (hoặc ...)
  text = text.replace(/\s*\(\s*hoặc\s+[^)]+\)/gi, '');

  // 3. Examples inside parens (như ...)
  text = text.replace(/\s*\(\s*như\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*ví\s+dụ\s+[^)]+\)/gi, '');

  // 4. Drug class hints inside parens
  text = text.replace(/\s*\(\s*(thuộc\s+)?nhóm\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*thuốc\s+lợi\s+tiểu\s+kháng\s+aldosteron\s*\)/gi, '');
  text = text.replace(/Spironolacton liều thấp\s*\(\s*25\s*-\s*50\s*mg\/ngày\s*\)/gi, 'Spironolacton 25 - 50 mg/ngày');
  text = text.replace(/\s*\(\s*25\s*-\s*50\s*mg\/ngày\s*\)/gi, ' 25 - 50 mg/ngày');
  text = text.replace(/\s*\(\s*chẹn\s+chọn\s+lọc\s+alpha-1A\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Verapamil\,\s*Diltiazem\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Furosemid\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Paracetamol\,\s*NSAID\s*\)/gi, '');
  text = text.replace(/\s*\(\s*gồm\s+1\s+lợi\s+tiểu\s*\)/gi, '');

  // 5. Rationales, mechanisms and spoiler explanations
  text = text.replace(/\s*\(\s*trước\s+khi\s+NAPQI\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*pha\s+muộn\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*do\s+nguy\s+cơ\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*do\s+thiếu\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*đối\s+kháng\s+cạnh\s+tranh\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*tương\s+tác\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*(men\s+ESBL|vẫn\s+bền\s+vững)\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*khi\s+đó\s+nên\s+đổi\s+sang\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*người\s+dùng\s+PPI\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*chưa\s+dung\s+nạp\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*khoảng\s+cách\s+giữa\s+liều\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*thường\s+ít\s+gây\s+ức\s+chế\s+trục\s+HPA\s+kéo\s+dài\s*\)/gi, '');
  text = text.replace(/\s*\(\s*thường\s+đưa\s+vào\s+lúc\s+bắt\s+đầu\s+khởi\s+mê\s*\)/gi, '');
  text = text.replace(/\s*\(\s*thường\s+thực\s+hiện\s+cùng\s+lúc\s+khởi\s+mê\s*\)/gi, '');
  text = text.replace(/\s*\(\s*mỗi\s+4\s+giờ\s*\)/gi, '');
  text = text.replace(/\s*\(\s*giảm\s+natri\s*\)/gi, '');
  text = text.replace(/\s*\(\s*hạn\s+chế\s+natri\s*\)/gi, '');
  text = text.replace(/\s*\(\s*chất\s+đạm\s*\)/gi, '');
  text = text.replace(/\s*\(\s*negative\s+feedback\s*\)/gi, '');
  text = text.replace(/\s*\(\s*pH\s+sữa\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*pH\s+từ\s+\d+\s+đến\s+\d+\s*\)/gi, '');
  text = text.replace(/\s*\(\s*giải\s+phóng\s+lympho\s*kin\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*first-pass\s*\)/gi, '');
  text = text.replace(/\s*\(\s*pha\s+II\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Australia\s*\)/gi, '');
  text = text.replace(/\s*\(\s*đặc\s+biệt\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*trước\s+ăn\s+1\s+giờ\s+hoặc\s+sau\s+ăn\s+2\s+giờ\s*\)/gi, '');
  text = text.replace(/\s*\(\s*trước\/sau\s+ăn\s*\)/gi, '');
  text = text.replace(/\s*\(\s*trước\s+uống\s+thuốc\,\s*ăn\s+sáng\s*\)/gi, '');
  text = text.replace(/\s*\(\s*trừ\s+Ceftazidim\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Beta-lactam\s+phối\s+hợp\s+Aminosid\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Disulfiram-like\s*\)/gi, '');
  text = text.replace(/\s*\(\s*giảm\s+nhu\s+cầu\s+oxy\s+cơ\s+tim\s*\)/gi, '');
  text = text.replace(/\s*\(\s*bảo\s+vệ\s+cấu\s+trúc\s+tim\s*\)/gi, '');
  text = text.replace(/\s*\(\s*hiếm\s+khi\s+quá\s+14\s+ngày\s*\)/gi, '');
  text = text.replace(/\s*\(\s*lỵ\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Lỵ\s+trực\s+khuẩn\s*\)/gi, '');
  text = text.replace(/\s*\(\s*do\s+Shigella[^)]*\)/gi, '');
  text = text.replace(/\s*\(\s*do\s+chẹn\s+thụ\s+thể\s+Beta-2\s*\)/gi, '');
  text = text.replace(/\s*\(\s*do\s+dẫn\s+truyền\s+qua[^)]*\)/gi, '');
  text = text.replace(/\s*\(\s*nguy\s+cơ\s+liệt\s+ruột\s*\)/gi, '');
  text = text.replace(/\s*\(\s*thành\s+ưu\s+trương[^)]*\)/gi, '');
  text = text.replace(/\s*\(\s*bắt\s+đầu\s+từ\s+6\s+tuần\s+tuổi\s*\)/gi, '');
  text = text.replace(/\s*\(\s*cân\s+nhắc\s+1\s+liều\s+duy\s+nhất[^)]*\)/gi, '');
  text = text.replace(/\s*\(\s*chậm\s+hơn\s+SABA\s*\)/gi, '');
  text = text.replace(/\s*\(\s*tăng\s+mật\s+độ\s+xương\s*\)/gi, '');
  text = text.replace(/\s*\(\s*huyết\s+khối\s+tĩnh\s+mạch\s+sâu[^)]*\)/gi, '');
  text = text.replace(/\s*\(\s*kích\s+thích\s+tạo\s+cốt\s+bào[^)]*\)/gi, '');
  text = text.replace(/\s*\(\s*chẹn\s+đỉnh\s+LH\/FSH\s*\)/gi, '');
  text = text.replace(/\s*\(\s*kể\s+cả\s+uống\s+2\s+viên\s+cùng\s+lúc\s*\)/gi, '');
  text = text.replace(/\s*\(\s*ức\s+chế\s+tân\s+tạo\s+đường\s*\)/gi, '');
  text = text.replace(/\s*\(\s*nguy\s+cơ\s+toan\s+acid\s+lactic[^)]*\)/gi, '');
  text = text.replace(/\s*\(\s*chậm\s+tháo\s+rỗng\s+dạ\s+dày[^)]*\)/gi, '');
  text = text.replace(/\s*\(\s*1\s+lần\/tuần[^)]*\)/gi, '');
  text = text.replace(/\s*\(\s*do\s+tác\s+dụng\s+phụ\s+thuộc\s+nồng\s+độ\s+glucose\s*\)/gi, '');
  text = text.replace(/\s*\(\s*nửa\s+cốc\s+nước\s+ngọt[^)]*\)/gi, '');
  text = text.replace(/\s*\(\s*ít\s+ức\s+chế\s+chuyển\s+hóa[^)]*\)/gi, '');
  text = text.replace(/\s*\(\s*giảm\s+tổng\s+hợp\s+VLDL\s+tại\s+gan\s*\)/gi, '');
  text = text.replace(/\s*\(\s*quá\s+2\s+lần\s+T1\/2[^)]*\)/gi, '');
  text = text.replace(/\s*\(\s*viêm\s+bàng\s+quang\s+cấp[^)]*\)/gi, '');
  text = text.replace(/\s*\(\s*thâm\s+nhập\s+mô\s+sâu\s*\)/gi, '');
  text = text.replace(/\s*\(\s*hoạt\s+tính\s+mineralocorticoid[^)]*\)/gi, '');
  text = text.replace(/\s*\(\s*trùng\s+đỉnh\s+bài\s+tiết\s+cortisol\s+tự\s+nhiên\s*\)/gi, '');
  text = text.replace(/\s*\(\s*tác\s+dụng\s+trung\s+bình\s+12\s*-\s*36\s*giờ[^)]*\)/gi, '');
  text = text.replace(/\s*\(\s*X-quang\s+phổi[^)]*\)/gi, '');
  text = text.replace(/\s*\(\s*nguy\s+cơ\s+Glaucoma\s+góc\s+mở\s*\)/gi, '');
  text = text.replace(/\s*\(\s*gãy\s+xẹp\s+đốt\s+sống[^)]*\)/gi, '');
  text = text.replace(/\s*\(\s*Hydrocortisone\s+tiêm\s+tĩnh\s+mạch[^)]*\)/gi, '');
  text = text.replace(/\s*\(\s*\'by\s+the\s+clock\'\s*\)/gi, '');
  text = text.replace(/\s*\(\s*tối\s+đa\s+không\s+quá\s+7\s+ngày\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Thạc\s+sĩ[^)]*\)/gi, '');
  text = text.replace(/\s*\(\s*\'bẫy\s+ion\'\s*\)/gi, '');
  text = text.replace(/\s*\(\s*quý\s+2\,\s*quý\s+3\s*\)/gi, '');
  text = text.replace(/\s*\(\s*hạ\s+sốt\,\s*giảm\s+đau\s*\)/gi, '');
  text = text.replace(/\s*\(\s*hạ\s+Natri\,\s*tăng\s+Kali\s*\)/gi, '');
  text = text.replace(/\s*\(\s*vùng\s+mắt\s+cá\s+chân\s*\)/gi, '');
  text = text.replace(/\s*\(\s*ít\s+bị\s+enzym\s+11-beta-HSD2[^)]*\)/gi, '');
  text = text.replace(/\s*\(\s*bảo\s+quản\s+đậy\s+nắp\s+kín[^)]*\)/gi, '');
  text = text.replace(/\s*\(\s*Rebound\s+hypertension\s*\)/gi, '');

  // 6. Clinical symptoms, organ conditions and lists of examples inside parens
  text = text.replace(/\s*\(\s*suy\s+gan\s+cấp\s+tiến\s+triển\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*dạng\s+có\s+hoạt\s+tính\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*Dược\s+sĩ\s+đại\s+học\s*\)/gi, '');
  text = text.replace(/\s*\(\s*bướu\s+trâu\s*\)/gi, '');
  text = text.replace(/\s*\(\s*lở\s+mép\s*\)/gi, '');
  text = text.replace(/\s*\(\s*phù\s+ngoại\s+vi\s*\)/gi, '');
  text = text.replace(/\s*\(\s*biệt\s+dược\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*khoảng\s+0,5\s*\)/gi, '');
  text = text.replace(/\s*\(\s*thở\s+chậm\s*\)/gi, '');
  text = text.replace(/\s*\(\s*đau\s+sau\s+zona[^)]*\)/gi, '');
  text = text.replace(/\s*\(\s*sởi\,\s*quai\s+bị[^)]*\)/gi, '');
  text = text.replace(/\s*\(\s*Candida\,\s*Aspergillus\s*\)/gi, '');
  text = text.replace(/\s*\(\s*IL-1\,\s*IL-6\,\s*TNF-alpha\s*\)/gi, '');
  text = text.replace(/\s*\(\s*PGE2\,\s*PGI2\s*\)/gi, '');
  text = text.replace(/\s*\(\s*sỏi\s+đường\s+mật\,\s*u\s+chèn\s+ép\s+đầu\s+tụy\s*\)/gi, '');
  text = text.replace(/\s*\(\s*lú\s+lẫn\,\s*thất\s+điều\,\s*liệt\s+vận\s+nhãn\s*\)/gi, '');
  text = text.replace(/\s*\(\s*suy\s+thận\s+cấp\s*\)/gi, '');
  text = text.replace(/\s*\(\s*tổn\s+thương\s+tiền\s+đình\s*-\s*ốc\s+tai\,\s*điếc\s+không\s+hồi\s+phục\s*\)/gi, '');
  text = text.replace(/\s*\(\s*hoại\s+tử\s+tế\s+bào\s+gan\s+cấp\s+tính\s*\)/gi, '');
  text = text.replace(/\s*\(\s*ức\s+chế\s+sinh\s+ba\s+dòng\s+tế\s+bào\s+máu\s*\)/gi, '');
  text = text.replace(/\s*\(\s*viêm\s+loét\s+trợt\s+dạ\s+dày\s*\)/gi, '');
  text = text.replace(/\s*\(\s*xơ\s+gan\s*\)/gi, '');
  text = text.replace(/\s*\(\s*suy\s+tim\,\s*loạn\s+nhịp\s*\)/gi, '');
  text = text.replace(/\s*\(\s*đái\s+tháo\s+đường\s+da\s+màu\s+đồng\s+thiếc\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Phlebotomy\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Beta-1\,\s*Beta-2\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Doxazosin\,\s*Terazosin\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Al3\+\,\s*Mg2\+\,\s*Ca2\+\,\s*Fe2\+\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Al3\+\,\s*Mg2\+\,\s*Ca2\+\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Système\s+International\s+d\'Unités\s*\)/gi, '');
  text = text.replace(/\s*\(\s*US\s+Customary\s+Units\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Imperial\s+Units\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Loading\s+Dose\s*-\s*D_L\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Vd\s*-\s*Volume\s+of\s+Distribution\s*\)/gi, '');
  text = text.replace(/\s*\(\s*AUC\s*-\s*Area\s+Under\s+the\s+Curve\s*\)/gi, '');
  text = text.replace(/\s*\(\s*T1\/2\s*-\s*Elimination\s+Half-life\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Cmax\s*-\s*Peak\s+Concentration\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Spina\s+bifida\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Megaloblastic\s+anemia\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Magnesi\s+amoni\s+phosphat\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Drug-induced\s+lupus\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Systemic\s+sclerosis\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Glaucoma\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Pyridoxin\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Phytomenadion\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Calcitriol\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Annexin-1\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Measles\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Implanon\s*\)/gi, '');
  text = text.replace(/\s*\(\s*thalidomide\s*\)/gi, '');
  text = text.replace(/\s*\(\s*nhồi\s+máu\s+cơ\s+tim[^)]*\)/gi, '');
  text = text.replace(/\s*\(\s*tăng\s+khó\s+thở[^)]*\)/gi, '');
  text = text.replace(/\s*\(\s*não\s+bộ\s*\)/gi, '');
  text = text.replace(/\s*\(\s*trưởng\s+thành\s+phế\s+nang\s+phổi\s*\)/gi, '');
  text = text.replace(/\s*\(\s*B\.\s*fragilis[^)]*\)/gi, '');
  text = text.replace(/\s*\(\s*Trichomonas[^)]*\)/gi, '');
  text = text.replace(/\s*\(\s*PCV13\,\s*PPSV23\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Lupus\s+ban\s+đỏ[^)]*\)/gi, '');
  text = text.replace(/\s*\(\s*bẹn\,\s*nách\s*\)/gi, '');
  text = text.replace(/\s*\(\s*thận\,\s*mạch\s+máu\s*\)/gi, '');
  text = text.replace(/\s*\(\s*tim\,\s*não\,\s*thận\,\s*đáy\s+mắt\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Naloxon\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Oresol\s*\)/gi, '');

  // 7. Redundant units, limits & durations inside parens
  text = text.replace(/\s*\(\s*[><=]+\s*\d+\s*ngày\s*\)/gi, '');
  text = text.replace(/\s*\(\s*cách\s+nhau\s+\d+\s+giờ\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Mức\s+độ\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*diễn\s+tiến\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*thường\s+tự\s+khỏi\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*kéo\s+dài\s+trong\s+vòng\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*(36|12|nửa|120)\s+tháng\s*\)/gi, '');

  // 8. Convert inline dose parens
  text = text.replace(/\(\s*1000-1200\s*mg\/ngày\s*\)/gi, '1000-1200 mg/ngày');
  text = text.replace(/\(\s*800-1000\s*UI\/ngày\s*\)/gi, '800-1000 UI/ngày');
  text = text.replace(/\(\s*≥\s*80\s*tuổi\s*\)/gi, '≥ 80 tuổi');
  text = text.replace(/\(\s*≤\s*60\s*kg\s*\)/gi, '≤ 60 kg');

  // 9. ADR subtype spoiler trimming
  text = text.replace(/\(Bizarre\s*-\s*[^)]+\)/gi, '(Bizarre)');
  text = text.replace(/\(Augmented\s*-\s*[^)]+\)/gi, '(Augmented)');
  text = text.replace(/\(Chronic\s*-\s*[^)]+\)/gi, '(Chronic)');
  text = text.replace(/\(Delayed\s*-\s*[^)]+\)/gi, '(Delayed)');
  text = text.replace(/\(End-of-use\s*-\s*[^)]+\)/gi, '(End-of-use)');

  // 10. Dehydration phác đồ trimming
  text = text.replace(/\s*\(\s*Mất\s+nước\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*Có\s+mất\s+nước\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*Không\s+mất\s+nước\s+[^)]+\)/gi, '');
  text = text.replace(/\s*\(\s*Isotonic\s+dehydration\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Hypertonic\s+dehydration\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Hypotonic\s+dehydration\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Phác\s+đồ\s+[ABC]\s*\)/gi, '');

  // 11. Clean standalone acronyms and English terms
  text = text.replace(/Creatin Kinase\s*\(\s*CK\s*\)/gi, 'Creatin Kinase');
  text = text.replace(/diện tích bề mặt cơ thể\s*\(\s*BSA\s*\)/gi, 'diện tích bề mặt cơ thể');
  text = text.replace(/ức chế tái hấp thu chọn lọc Serotonin\s*\(\s*SSRI\s*\)/gi, 'ức chế tái hấp thu chọn lọc Serotonin');
  text = text.replace(/kháng methicillin\s*\(\s*MRSA\s*\)/gi, 'kháng methicillin');
  text = text.replace(/ức chế bơm proton\s*\(\s*PPI\s*\)/gi, 'ức chế bơm proton');
  text = text.replace(/Cyclooxygenase-2\s*\(\s*COX-2\s*\)/gi, 'Cyclooxygenase-2');
  text = text.replace(/Globulin gắn Corticosteroid\s*\(\s*CBG\s*\)/gi, 'Globulin gắn Corticosteroid');
  text = text.replace(/N-acetyl-p-benzoquinone imine\s*\(\s*NAPQI\s*\)/gi, 'N-acetyl-p-benzoquinone imine');
  text = text.replace(/ống động mạch còn mở\s*\(\s*PDA\s*\)/gi, 'ống động mạch còn mở');
  text = text.replace(/giảm tiểu cầu miễn dịch nguyên phát\s*\(\s*ITP\s*\)/gi, 'giảm tiểu cầu miễn dịch nguyên phát');
  text = text.replace(/giảm tiểu cầu tự miễn\s*\(\s*ITP\s*\)/gi, 'giảm tiểu cầu tự miễn');
  text = text.replace(/Magnesi sulfat\s*\(\s*MgSO4\s*\)/gi, 'Magnesi sulfat');
  text = text.replace(/Nitric Oxide\s*\(\s*NO\s*\)/gi, 'Nitric Oxide');
  text = text.replace(/tiêm tĩnh mạch\s*\(\s*IV\s*\)/gi, 'tiêm tĩnh mạch');
  text = text.replace(/viên tránh thai kết hợp đường uống\s*\(\s*COC\s*\)/gi, 'viên tránh thai kết hợp đường uống');
  text = text.replace(/\s*\(\s*HPA\s*\)/gi, '');
  text = text.replace(/\s*\(\s*ORS\s*\)/gi, '');
  text = text.replace(/\s*\(\s*PAE\s*\)/gi, '');
  text = text.replace(/\s*\(\s*ODD\s*\)/gi, '');
  text = text.replace(/\s*\(\s*MACE\s*\)/gi, '');
  text = text.replace(/\s*\(\s*K-ATP\s*\)/gi, '');
  text = text.replace(/\s*\(\s*LMWH\s*\)/gi, '');
  text = text.replace(/\s*\(\s*TCA\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Topoisomerase\s+II\s*\)/gi, '');
  text = text.replace(/\s*\(\s*NSAID\s*\)/gi, '');
  text = text.replace(/\s*\(\s*FPP\s*\)/gi, '');
  text = text.replace(/\s*\(\s*ONJ\s*\)/gi, '');
  text = text.replace(/\s*\(\s*AFF\s*\)/gi, '');
  text = text.replace(/\s*\(\s*SABA\s*\)/gi, '');
  text = text.replace(/\s*\(\s*SAMA\s*\)/gi, '');
  text = text.replace(/\s*\(\s*-S-S-\s*\)/gi, '');
  text = text.replace(/\s*\(\s*IL-5\s*\)/gi, '');
  text = text.replace(/\s*\(\s*HCO3-\s*\)/gi, '');
  text = text.replace(/\s*\(\s*BMI\s*\)/gi, '');
  text = text.replace(/\s*\(\s*T-cells\s*\)/gi, '');
  text = text.replace(/\s*\(\s*CRE\,\s*CRAB\s*\)/gi, '');
  text = text.replace(/\s*\(\s*AUC\/MIC\s*\)/gi, '');
  text = text.replace(/\s*\(\s*AKI\s*\)/gi, '');
  text = text.replace(/\s*\(\s*PDE-4\s*\)/gi, '');
  text = text.replace(/\s*\(\s*MAP\s*\)/gi, '');
  text = text.replace(/\s*\(\s*LGG\s*\)/gi, '');
  text = text.replace(/\s*\(\s*ADR\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Gamma-Glutamyl\s+Transferase\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Alkaline\s+Phosphatase\s*\)/gi, '');
  text = text.replace(/\s*\(\s*SGOT\s*\)/gi, '');
  text = text.replace(/\s*\(\s*SGPT\s*\)/gi, '');
  text = text.replace(/\s*\(\s*hs-cTnT\s*\)/gi, '');
  text = text.replace(/\s*\(\s*hs-cTnI\s*\)/gi, '');
  text = text.replace(/\s*\(\s*Narrow\s+Therapeutic\s+Index[^)]*\)/gi, '');

  // Specific question fixes:
  // Q627
  text = text.replace(/Ức chế men chuyển\s*\(\s*ACEI?\s*\)/gi, 'Ức chế men chuyển');
  text = text.replace(/chẹn thụ thể\s*\(\s*ARB\s*\)/gi, 'chẹn thụ thể Angiotensin II');
  text = text.replace(/chẹn kênh calci\s*\(\s*CCB\s*\)/gi, 'chẹn kênh calci');
  text = text.replace(/\s*\(\s*ACEI\s*\+\s*ARB\s*\)/gi, '');
  text = text.replace(/Thuốc ức chế men chuyển\s*\(\s*ACEI?\s*\)/gi, 'Thuốc ức chế men chuyển');
  text = text.replace(/thuốc chẹn thụ thể Angiotensin II\s*\(\s*ARB\s*\)/gi, 'thuốc chẹn thụ thể Angiotensin II');
  text = text.replace(/thuốc chẹn thụ thể AT1 của angiotensin II\s*\(\s*ARB\s*\)/gi, 'thuốc chẹn thụ thể AT1 của Angiotensin II');
  text = text.replace(/hoặc chẹn thụ thể\s*\(\s*ARB\s*\)/gi, 'hoặc thuốc chẹn thụ thể Angiotensin II');

  // Final cleanup: double spaces, hanging commas, semicolons, dashes
  text = text.replace(/\s{2,}/g, ' ').trim();
  text = text.replace(/[\s,;±\-]+$/, '').trim();

  return text;
}

module.exports = { cleanOptionText };
