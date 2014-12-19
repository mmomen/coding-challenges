def string_index(num)
  if num[-1].to_i + 1 == 10
    num = string_index(num[0...num.length-1]) + '0'
  elsif num == ''
    num = '1'
  else
    num[-1] = (num[-1].to_i + 1).to_s
  end
  return num
end

# puts string_index('1000000')
# puts string_index('1039')
# puts string_index('145999')
puts string_index('9999')